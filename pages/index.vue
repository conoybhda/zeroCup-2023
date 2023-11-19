<template>
  <div class="index">
    <div class="mask"></div>
    <img class="title" src="/source/PageIndex/title.png" />
    <img class="draw" src="/source/PageIndex/Draw.png" />
    <img class="title-colored" src="/source/PageIndex/title-colored.png" v-show="allActived" />
    <div ref="textRef" class="text" @click="goto"> 滚动以开始</div>
    <Fireworks @mousedown.left="createLoves($event)" @mouseup="removeSmallHeart" ref="background" class="background"
      v-show="allActived" />
  </div>
</template>

<script setup>

let isChange = false;
const changeRoute = async (e) => {
  if (isChange) return;
  if (!textRef.value) return
  const style = window.getComputedStyle(textRef.value);
  const opacity = style.opacity
  if (opacity !== '1') return
  await navigateTo({
    path: `/storys`,
  });
  isChange = true;
};

const allActived = ref(false);

onActivated(() => {
  isChange = false;
  window.addEventListener("wheel", changeRoute);
  if (localStorage.getItem("storys")) {
    let storys = JSON.parse(localStorage.getItem("storys"));
    allActived.value = storys.every((story) => story.isActived);
  }
});

onDeactivated(() => {
  window.removeEventListener("wheel", changeRoute);
});
definePageMeta({
  pageTransition: {
    name: 'home'
  }
})

const textRef = ref(null)

const goto = async () => {
  await navigateTo({
    path: '/storys'
  })
}

const inst = getCurrentInstance();

const createLoves = (event) => {
  inst.ctx.$refs.background.createLoves(event);
}

const removeSmallHeart = () => {
  inst.ctx.$refs.background.removeSmallHert();
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
  cursor: url("/source/cursors/Sakura_Arrow.png"), auto;
}

.title {
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

.title-colored {
  position: absolute;
  animation: popIn 1.5s forwards ease-in-out;
  animation-delay: 5s;
  opacity: 0;
}

@keyframes popIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
