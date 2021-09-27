// 引入 script 文件在 body 最后，所以不需要写 window.onload 方法，直接写逻辑即可

// 默认使用 const 来声明变量，也是 ES6 的最佳实践之一
const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
  panels.forEach(panel => {
    // 使用 .classList 直接 remove，操作元素的 class
    panel.classList.remove("active");
  });
}

// 使用箭头函数替代 function() {} 声明，this 友好（！！！错误用法）
// 尽量避免使用箭头函数作为事件的回调，因为 this 会指向 window，从而导致一些预料之外的问题
panels.forEach(panel => {
  panel.addEventListener("click", () => {

    //
    console.log(this === window); // true

    // 为当前选中的元素移除样式
    removeActiveClasses();
    // 对当前元素添加样式
    panel.classList.add("active");
  });
});
