import { bitable } from '@lark-base-open/js-sdk'

document.getElementById('button_1').addEventListener('click', async function () {
  console.log('button1 clicked   0005')

  // 1、读取条件表
  const table02a = await bitable.base.getTableByName('02a-产量类型输入')
  console.log('table02a:', table02a)

  const field_02a_1 = await table02a.getField('产品编号');
  const field_02a_2 = await table02a.getField('SKU编号');
  const field_02a_3 = await table02a.getField('颜色');
  const field_02a_4 = await table02a.getField('尺码');
  const field_02a_5 = await table02a.getField('默认分包');
  const field_02a_6 = await table02a.getField('默认余数');
  console.log('field_02a_1:', field_02a_1)
  console.log('field_02a_2:', field_02a_2)
  console.log('field_02a_3:', field_02a_3)
  console.log('field_02a_4:', field_02a_4)
  console.log('field_02a_5:', field_02a_5)
  console.log('field_02a_6:', field_02a_6)


  // const productIdList = ['2221001']
  // const skuIdList = ['2221001669', '2221001610', '2221001468', '2221001568', '2221001569']
  // const colorList = ['绿色', '黑灰', '红色', '蓝色']  // 颜色
  // const sizeList = ['S', 'M', 'L']  // 尺码  
  const productIdList = []
  const skuIdList = []
  const colorList = []  // 颜色
  const sizeList = []
  const numPerBagList = []
  const remaindNumList = []
  const allRecordsResponse = await table02a.getRecords({ pageSize: 100 })
  console.log('allRecordsResponse:', allRecordsResponse)
  const allRecords = allRecordsResponse.records
  for (let i = 0; i < allRecords.length; i++) {
    console.log(`allRecords[${i}]=`, allRecords[i])
    const recordFields = allRecords[i].fields
    if(recordFields[field_02a_1.id]) {
      productIdList.push(recordFields[field_02a_1.id][0].text)
    }
    if(recordFields[field_02a_2.id]) {
      skuIdList.push(recordFields[field_02a_2.id][0].text)
    }
    if(recordFields[field_02a_3.id]) {
      colorList.push(recordFields[field_02a_3.id][0].text)
    }
    if(recordFields[field_02a_4.id]) {
      sizeList.push(recordFields[field_02a_4.id][0].text)
    }
    if(recordFields[field_02a_5.id]) {
      numPerBagList.push(recordFields[field_02a_5.id])
    }
    if(recordFields[field_02a_6.id]) {
      remaindNumList.push(recordFields[field_02a_6.id])
    }
  }
  console.log('productIdList=', productIdList)
  console.log('skuIdList=', skuIdList)  
  console.log('colorList=', colorList)
  console.log('sizeList=', sizeList)
  console.log('numPerBagList=', numPerBagList)
  console.log('remaindNumList=', remaindNumList)  

  
  // 3、清空订单数量表
  const table02b = await bitable.base.getTableByName('02b-订单数量输入')
  const t02b_recordIdList = await table02b.getRecordIdList()
  console.log('t02b_recordIdList=', t02b_recordIdList)
  if(t02b_recordIdList.length > 0){
    await table02b.deleteRecords(t02b_recordIdList);
  }
  const field_02b_1 = await table02b.getField('产品编号');
  const field_02b_2 = await table02b.getField('SKU编号');
  const field_02b_3 = await table02b.getField('颜色');
  const field_02b_4 = await table02b.getField('尺码');
  const field_02b_5 = await table02b.getField('分包条件');
  const field_02b_6 = await table02b.getField('余数条件');
  console.log('field_02b_1:', field_02b_1)
  console.log('field_02b_2:', field_02b_2)
  console.log('field_02b_3:', field_02b_3)
  console.log('field_02b_4:', field_02b_4)
  console.log('field_02b_5:', field_02b_5)
  console.log('field_02b_6:', field_02b_6)

  // 3、输出到订单数量表格
  const recordList = []
  for (let i = 0; i < productIdList.length; i++) {
    for (let j = 0; j < skuIdList.length; j++) {
      for (let k = 0; k < colorList.length; k++) {
        for (let l = 0; l < sizeList.length; l++) {
          const record = {
            fields:{
              [field_02b_1.id]: productIdList[i],
              [field_02b_2.id]: skuIdList[j],
              [field_02b_3.id]: colorList[k],
              [field_02b_4.id]: sizeList[l],
              [field_02b_5.id]: 50,
              [field_02b_6.id]: 10,
            }
          }
          recordList.push(record)
        }
      }
    }
  }
  if(recordList.length > 0){
    await table02b.addRecords(recordList)
  }


  alert('第一个功能模块按钮被点击')
})

document.getElementById('button_2').addEventListener('click', async function () {
  console.log('button2 clicked')
  const startLine = document.getElementById('start-line').value
  const endLine = document.getElementById('end-line').value
  alert(`第二个功能模块按钮被点击  startLine=${startLine}, endLine=${endLine}`)
})
