<template>
  <div>
    <img :src="data['title-picture']" class="title" />
    <div class="box">
      <span class="chap">{{ data.chap }}</span>
      <span class="titleText">{{ data.title }}</span>
    </div>
    <span class="nextPage">滚动以前往下一页</span>
  </div>
</template>
<script setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});

const route = useRoute();
const data = getData(route.params.id);
const nowStory = ref(0);
const changePage = (num) => {
  if (nowStory.value + num < 0) {
    nowStory.value = data.photos.length;
  }
  nowStory.value = (nowStory.value + num) % data.photos.length;
};

let isChange = false;
let startTime = 0;
const changeRoute = async (e) => {
  if (Date.now().valueOf() - startTime < 800) return;
  if (isChange) return;
  if (e.deltaY > 0) {
    isChange = true;
    await navigateTo({
      path: `/story-${route.params.id}/page1`,
    });
  } else {
    isChange = true;
    await navigateTo({
      path: `/storys`,
    });
  }
};

onActivated(() => {
  startTime = Date.now().valueOf();
  isChange = false;
  window.addEventListener("wheel", changeRoute);
});

onDeactivated(() => {
  window.removeEventListener("wheel", changeRoute);
});
</script>
<style scoped>
.title {
  height: 100vh;
  width: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.4;
  z-index: -1;
  overflow: hidden;
}

.nextPage {
  font-family: "XiaoDouDao";
  position: absolute;
  font-size: 1.5vw;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  animation: shan 1s infinite both alternate ease-in-out;
}

@keyframes shan {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "XiaoDouDao";

  .chap {
    font-size: 5vw;
  }

  .titleText {
    margin-top: 2vh;
    font-size: 7vw;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  filter: blur(0);
}</style>
