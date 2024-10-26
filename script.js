// 获取按钮和输出元素的引用
const button = document.getElementById('myButton')
const output = document.getElementById('output')

// 给按钮添加点击事件监听器
button.addEventListener('click', function () {
  // 在输出元素中显示 "Hello World"
  output.textContent = 'Hello World'
})
