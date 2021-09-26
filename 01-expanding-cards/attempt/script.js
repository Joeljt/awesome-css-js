window.onload = function () {

  let elements = document.querySelectorAll("img");
  elements.forEach((element, index) => {
    element.addEventListener("click", function () {

      // 清除当前展开的项
      // 但是循环设置有效率问题
      elements.forEach(item => {
        item.className = "folded";
      });

      // 给当前点击的 item 设置展开效果
      this.className += " expanded";

    });
  })
};

