import { bitable } from '@lark-base-open/js-sdk'

document.getElementById('button_1').addEventListener('click', async function () {
  console.log('button1 clicked   0002')

  // 1、读取条件表
  const table02a = await bitable.base.getTableByName('02a-产量类型输入')
  console.log('table02a:', table02a)

  const allRecordsResponse = await table02a.getRecords({ pageSize: 100 })
  console.log('allRecordsResponse:', allRecordsResponse)
  const allRecords = allRecordsResponse.records
  for (let i = 0; i < allRecords.length; i++) {
    console.log(`allRecords[${i}]=`, allRecords[i])
  }

  const fieldList = await table02a.getFieldList();
  console.log('fieldList:', fieldList)


  // 2、条件排列组合
  const productIdList = ['2221001']
  const skuIdList = ['2221001669', '2221001610', '2221001468', '2221001568', '2221001569']
  const colorList = ['绿色', '黑灰', '红色', '蓝色']  // 颜色
  const sizeList = ['S', 'M', 'L']  // 尺码  
  
  // 3、清空订单数量表
  const table02b = await bitable.base.getTableByName('02b-订单数量输入')
  const t02b_recordIdList = await table02b.getRecordIdList()
  console.log('t02b_recordIdList=', t02b_recordIdList)
  await table02b.deleteRecords(t02b_recordIdList);

  // 3、输出到订单数量表格
  const recordList = []
  for (let i = 0; i < productIdList.length; i++) {
    for (let j = 0; j < skuIdList.length; j++) {
      for (let k = 0; k < colorList.length; k++) {
        for (let l = 0; l < sizeList.length; l++) {
          const record = {
            '产品编号': productIdList[i],
            'SKU编号': skuIdList[j],
            '颜色': colorList[k],
            '尺码': sizeList[l],
            '分包条件': 50,
            '余数条件': 10,
          }
          recordList.push(record)
        }
      }
    }
  }
  await table02b.addRecords(recordList)

  alert('第一个功能模块按钮被点击')
})

document.getElementById('button_2').addEventListener('click', async function () {
  console.log('button2 clicked')
  const startLine = document.getElementById('start-line').value
  const endLine = document.getElementById('end-line').value
  alert(`第二个功能模块按钮被点击  startLine=${startLine}, endLine=${endLine}`)
})
