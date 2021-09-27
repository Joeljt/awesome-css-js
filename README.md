# awesome-css-js

This repo is based on [50projects50days](https://github.com/bradtraversy/50projects50days).

#### 01-expanding-cards
- 默认使用 const 来声明变量，在有需要的时候才改用 let，坚决不用 var
- ~~使用箭头函数替代 function() {} 声明，this 友好~~
  - 尽量避免使用箭头函数作事件的回调函数，因为 this === window 为 true
- flex 布局中，align-items 和 align-content 的区别
- 元素设置为绝对定位后脱离标准流，无法再撑起父元素的宽度
- 利用 flex 属性，使没有宽度的元素按比例平分父布局的空间

#### 02-progress-steps
- 元素设置为绝对定位后脱离标准流，不再和原本的兄弟元素抢占父元素宽度
- 方法的封装与抽离
