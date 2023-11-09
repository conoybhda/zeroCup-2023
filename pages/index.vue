<template>
  <div class="index">
    <img class="title" src="/source/PageIndex/title.png" />
    <img class="draw" src="/source/PageIndex/Draw.png" />
  </div>
</template>

<script setup></script>

<style scoped>
.index {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.title {
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 0 0, 0 0, 0 0); /* 开始时遮罩覆盖整个图像 */
  animation: reveal 5s forwards ease-in-out; /* 定义动画时间和类型 */
}
.draw {
  position: absolute;
  z-index: 100;
  height: 300px;
  align-self: flex-start;
  animation: move 6s forwards ease-in-out;
  /* 设置元素开始时在左中间 */
  top: 50%;
  left: 0;
  transform: translateY(-50%); /* 保持元素垂直居中 */
}

@keyframes move {
  0% {
    top: 50%;
    left: 0; /* 从左中间开始 */
    transform: translateY(-50%);
  }
  5% {
    top: 10%;
    left: 10%;
    transform: translateY(-50%);
  }
  10% {
    top: 90%;
    left: 5%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  15% {
    top: 10%;
    left: 15%;
    transform: translateY(-50%);
  }
  20% {
    top: 90%;
    left: 10%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  25% {
    top: 10%;
    left: 25%;
    transform: translateY(-50%);
  }
  30% {
    top: 90%;
    left: 20%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  35% {
    top: 10%;
    left: 35%;
    transform: translateY(-50%);
  }
  40% {
    top: 90%;
    left: 30%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  45% {
    top: 10%;
    left: 45%;
    transform: translateY(-50%);
  }
  50% {
    top: 90%;
    left: 40%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  55% {
    top: 10%;
    left: 55%;
    transform: translateY(-50%);
  }
  60% {
    top: 90%;
    left: 50%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  65% {
    top: 10%;
    left: 65%;
    transform: translateY(-50%);
  }
  70% {
    top: 90%;
    left: 60%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  75% {
    top: 10%;
    left: 75%;
    transform: translateY(-50%);
  }
  80% {
    top: 90%;
    left: 70%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  85% {
    top: 10%;
    left: 85%;
    transform: translateY(-50%);
  }
  90% {
    top: 90%;
    left: 80%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
  95% {
    top: 10%;
    left: 95%;
    transform: translateY(-50%);
  }
  100% {
    top: 50%;
    left: 100%; /* 移动到顶部中间 */
    transform: translateY(-50%);
  }
}

/* 当.draw元素动画开始时，更新图片的clip-path */
@keyframes reveal {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}
</style>
