<template>
  <div class="index">
    <div class="mask"></div>
    <img class="title" src="/source/PageIndex/title.png" />
    <img class="draw" src="/source/PageIndex/Draw.png" />
    <div ref="textRef" class="text" @click="goto"> 滚动以开始</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// 设定一个滚动距离阈值
const scrollThreshold = 100; // 像素

// 滚动事件的处理函数
function handleScroll() {
  console.log('qwe')
  // 如果页面滚动超过了阈值
  console.log(window.scrollY)
  if (window.scrollY > scrollThreshold) {
    // 触发您想要执行的函数
    goto()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
definePageMeta({
  pageTransition: {
    name: 'home'
  }
})

const textRef = ref(null)

// const a = setInterval(() => {
//   if (textRef.value) {
//     const style = window.getComputedStyle(textRef.value);
//     console.log(style.opacity);
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(a)
// }, 10000);

const goto = async () => {
  await navigateTo({
    path: '/storys'
  })
}
</script>

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
  z-index: -1;
  /* 定义动画时间和类型 */
}

.draw {
  position: absolute;
  z-index: 100;
  width: 895px;
  align-self: flex-start;
  animation: move 5s forwards ease-in-out;
  /* 设置元素开始时在左中间 */
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  /* 保持元素垂直居中 */
}

.text {
  font-size: 48px;
  font-family: XiaoDouDao;
  opacity: 0;
  animation: show 6s forwards ease-in-out;
  font-weight: 400;
  color: #000000;
  line-height: 0px;
  position: absolute;
  bottom: 100px;
  text-decoration: none;
}

.mask {
  position: absolute;
  width: 100%;
  /* 遮罩宽度与容器相同 */
  height: 100%;
  /* 遮罩高度与容器相同 */
  background: transparent;
  /* 透明背景 */
  animation: slide-right 6s forwards ease-in-out;
  /* 定义动画时间和类型 */
}

.mask::after {
  content: '';
  position: absolute;
  top: 0;
  left: -10%;
  /* 初始化时在容器左侧外 */
  width: 100%;
  /* 伪元素的宽度与容器相同 */
  height: 100%;
  /* 伪元素的高度与容器相同 */
  background: #fff;
  /* 遮罩颜色 */
  transform: skewX(-20deg);
  /* 倾斜变换 */
  transform-origin: bottom right;
  /* 变换的原点 */
}

@keyframes show {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes move {
  0% {
    top: 50%;
    left: 0;
    /* 从左中间开始 */
    transform: translateY(-50%);
  }

  5% {
    top: 10%;
    left: 10%;
    transform: translateY(-50%);
  }

  /* 10% {
    top: 90%;
    left: 5%;
    transform: translateY(-50%);
  }

  15% {
    top: 10%;
    left: 15%;
    transform: translateY(-50%);
  } */

  20% {
    top: 90%;
    left: 10%;
    transform: translateY(-50%);
  }

  /* 25% {
    top: 10%;
    left: 25%;
    transform: translateY(-50%);
  }

  30% {
    top: 90%;
    left: 20%;
    transform: translateY(-50%);
  } */

  35% {
    top: 10%;
    left: 35%;
    transform: translateY(-50%);
  }

  /* 40% {
    top: 90%;
    left: 30%;
    transform: translateY(-50%);
  }

  45% {
    top: 10%;
    left: 45%;
    transform: translateY(-50%);
  } */

  50% {
    top: 90%;
    left: 40%;
    transform: translateY(-50%);
  }

  /* 55% {
    top: 10%;
    left: 55%;
    transform: translateY(-50%);
  }

  60% {
    top: 90%;
    left: 50%;
    transform: translateY(-50%);
  } */

  65% {
    top: 10%;
    left: 65%;
    transform: translateY(-50%);
  }

  /* 
  70% {
    top: 90%;
    left: 60%;
    transform: translateY(-50%);
  }

  75% {
    top: 10%;
    left: 75%;
    transform: translateY(-50%);
  } */

  80% {
    top: 90%;
    left: 70%;
    transform: translateY(-50%);
  }

  /* 85% {
    top: 10%;
    left: 85%;
    transform: translateY(-50%);
  }

  90% {
    top: 90%;
    left: 80%;
    transform: translateY(-50%);
  } */

  95% {
    top: 10%;
    left: 95%;
    transform: translateY(-50%);
  }

  100% {
    top: 50%;
    left: 100%;

    transform: translateY(-50%);
  }
}

/* 定义动画 */
@keyframes slide-right {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
