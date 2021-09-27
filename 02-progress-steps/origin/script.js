const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// 事件回调不要用箭头函数，this 会指向 window 对象
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  doUpdate();
});

// 事件回调不要用箭头函数，this 会指向 window 对象
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  doUpdate();
});

/**
 * 封装的思想要学习，抽离方法处理业务
 */
function doUpdate() {
  // 根据当前的位置变更步骤的选中状态
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 源码逻辑，有点复杂
  // // 根据当前 active 控件的选中数量与全部按钮数量的比值，来控制进度条的百分比
  // const actives = document.querySelectorAll('.active')
  // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
  //
  // // 根据边界控制按钮是否可以操作
  // if(currentActive === 1) {
  //   prev.disabled = true
  // } else if(currentActive === circles.length) {
  //   next.disabled = true
  // } else {
  //   prev.disabled = false
  //   next.disabled = false
  // }

  // 自己实现的逻辑
  progress.style.width = (350 / (circles.length - 1)) * (currentActive - 1) + "px";
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;

}
