import $ from 'jquery'
import { bitable } from '@base-open/web-api'
import './index.scss'

const output = document.getElementById('output')

$(async function () {
  const [tableList, selection] = await Promise.all([
    bitable.base.getTableMetaList(), // 获取tebal列表
    bitable.base.getSelection() // 获取选中的tabal
  ])
  if (output) output.textContent = `hahha=${tableList[0]}`
  const optionsHtml = tableList
    .map((table) => {
      return `<option value="${table.id}">${table.name}</option>`
    })
    .join('')
  $('#tableSelect').append(optionsHtml).val(selection.tableId!)
  $('#addRecord').on('click', async function () {
    const tableId = $('#tableSelect').val()
    if (tableId) {
      const table = await bitable.base.getTableById(tableId as string)
      const field = await table.getFieldByName('多行文本') // 选择"多行文本"字段
      const res = await table.addRecord({
        fields: {
          [field.id]: [
            // 多行文本对应的值的格式
            {
              type: 'text',
              text: 'hello world'
            }
          ]
        }
      })
    }
  })
})
