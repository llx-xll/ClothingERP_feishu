import { bitable } from '@lark-base-open/js-sdk'



// 拆包
function getBagNum(num, numPerBag, remaindNum){
  const numOfBags = Math.floor(num / numPerBag)
  const remaindNumOfBags = num % numPerBag
  const numOfBagsList = []
  for (let i = 0; i < numOfBags; i++) {
    numOfBagsList.push(numPerBag)
  }
  if(remaindNumOfBags > 0){
    if(remaindNumOfBags > remaindNum){ // 余数大于分包条件
      numOfBagsList.push(remaindNumOfBags)
    }else{ // 余数小于分包条件
      numOfBagsList[numOfBagsList.length - 1] += remaindNumOfBags // 最后一个包加上余数
    }
  }
  return numOfBagsList
}

// 读取base信息，根据编号获取table id
async function getTableIdByName(){
  const tableMetaList = await bitable.base.getTableMetaList();
  console.log("tableMetaList:", tableMetaList)
  let out = {};
  for(const tableMeta of tableMetaList){
    const tableName = tableMeta.name
    const tableId = tableMeta.id
    if(tableName.startsWith('02-大货订单')){
      out["02"] = tableId
    }
    if(tableName.startsWith('03-自动分包')){
      out["03"] = tableId
    }
    if(tableName.startsWith('05-工序任务')){
      out["05"] = tableId
    }
  }
  return out;
}

function readGongXU(gongXuList){
  let out = [];
  if(!gongXuList){
    return out;
  }
  for(const gongXu of gongXuList){
    out.push(gongXu.text)
  }
  out.sort();
  return out;
}

document.getElementById('button_2').addEventListener('click', async function () {
  console.log('button2 clicked 11')

  // 1、读取所有表格名称
  const tableIds = await getTableIdByName();
  console.log(`tableIds: `, tableIds)

  // 2、读取输入表格数据
  const table02 = await bitable.base.getTableById(tableIds['02'])
  const table03 = await bitable.base.getTableById(tableIds['03'])
  const table05 = await bitable.base.getTableById(tableIds['05'])

  const t02_field_sku = await table02.getField('SKU');
  const t02_field_num = await table02.getField('下单数量');
  const t02_field_numPerBag = await table02.getField('分包【默认50】');
  const t02_field_remainder = await table02.getField('余数【默认30】');
  const t02_field_isFenBao = await table02.getField('已分包');
  const t02_field_isFenBao_Meta = await t02_field_isFenBao.getMeta();
  const t02_field_bagNum = await table02.getField('包数');
  const t02_field_gongXu = await table02.getField('工序');
  console.log('t02_field_isFenBao_Meta:', t02_field_isFenBao_Meta)
 


  const t03_field_sku = await table03.getField('SKU');
  const t03_field_numInBag = await table03.getField('每包数量');
  const t03_field_bagIndex = await table03.getField('包号');
  const t03_field_beizhu = await table03.getField('备注');
  const t03_field_beizhu_Meta = await t03_field_beizhu.getMeta();
  console.log('t03_field_beizhu_Meta:', t03_field_beizhu_Meta)


  const t05_field_sku = await table05.getField('SKU');
  const t05_field_numInBag = await table05.getField('每包数量');
  const t05_field_bagIndex = await table05.getField('包号');
  const t05_field_beizhu = await table05.getField('备注');
  const t05_field_beizhu_Meta = await t05_field_beizhu.getMeta();
  const t05_field_gongXu = await table05.getField('工序');
  console.log('t05_field_beizhu_Meta:', t05_field_beizhu_Meta)



  const allRecordsResponse = await table02.getRecords({ pageSize: 100 })
  console.log('allRecordsResponse:', allRecordsResponse)
  const allRecords = allRecordsResponse.records
  for (let i = 0; i < allRecords.length; i++) {
    const recordFields = allRecords[i].fields
    const recordId = allRecords[i].recordId
    if(recordFields[t02_field_num.id]) { // 如果有下单数量
      console.log(`recordFields_${i}=`, recordFields)

      // 1、获取一行订单数据：sku、下单数量、分包条件、余数条件、是否分包、工序
      const sku = recordFields[t02_field_sku.id]
      const num = recordFields[t02_field_num.id]
      let numPerBag = recordFields[t02_field_numPerBag.id]
      let remaindNum = recordFields[t02_field_remainder.id]
      const isFenBao = recordFields[t02_field_isFenBao.id]
      const gongXu = recordFields[t02_field_gongXu.id]
      const gongXuList = readGongXU(gongXu)
      console.log("gongXuList:", gongXuList)
      if(!numPerBag) numPerBag = 50
      if(!remaindNum) remaindNum = 30
      console.log(`sku=${sku}, num=${num}, numPerBag=${numPerBag}, remaindNum=${remaindNum}, isFenBao=${isFenBao}, gongXuList=${gongXuList}`)

      // 2、过滤已经分包的
      if(isFenBao && isFenBao.text && isFenBao.text === '是'){
        continue
      }

      // 3、计算分包情况
      const numOfBagsList = getBagNum(num, numPerBag, remaindNum)
      console.log(`num=${num}, numPerBag=${numPerBag}, remaindNum=${remaindNum}, numOfBagsList=`, numOfBagsList)

      // 4、修改table02： 是否分包、包数
      const res = await table02.setRecord(recordId, {
        fields: {
          [t02_field_isFenBao.id]: {id: t02_field_isFenBao_Meta.property.options[0].id},
          [t02_field_bagNum.id]: numOfBagsList.length,
        }
      })

      // 5、追加table03：SKU、每包数量、包号、备注
      const recordList03 = []
      for (let j = 0; j < numOfBagsList.length; j++) {
        let beizhuStr = {id: t03_field_beizhu_Meta.property.options[0].id}
        if(numOfBagsList[j] !== numPerBag) {
          beizhuStr = {id: t03_field_beizhu_Meta.property.options[1].id}
        }
        const record03 = {
          fields:{
            [t03_field_sku.id]: sku,  // sku
            [t03_field_numInBag.id]: numOfBagsList[j], // 每包数量
            [t03_field_bagIndex.id]: j+1, // 包号
            [t03_field_beizhu.id]: beizhuStr, // 备注
          }
        }
        recordList03.push(record03)
        
      }
      table03.addRecords(recordList03);

      // 6、追加table05：SKU、每包数量、包号、备注、工序
      const recordList05 = []
      for (let j = 0; j < numOfBagsList.length; j++) {
        let beizhuStr = {id: t05_field_beizhu_Meta.property.options[0].id}
        if(numOfBagsList[j] !== numPerBag) {
          beizhuStr = {id: t05_field_beizhu_Meta.property.options[1].id}
        }
        for(const gongXu of gongXuList){
          // console.log("gongXu:", gongXu)
          const record05 = {
            fields:{
              [t05_field_sku.id]: sku,  // sku
              [t05_field_numInBag.id]: numOfBagsList[j], // 每包数量
              [t05_field_bagIndex.id]: j+1, // 包号
              [t05_field_beizhu.id]: beizhuStr, // 备注
              [t05_field_gongXu.id]: gongXu, // 工序
            }
          }
          recordList05.push(record05)
        }
      }
      table05.addRecords(recordList05);

    }
  }

  alert('分包已完成')
})
