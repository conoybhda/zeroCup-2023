<template>
  <div class="page1">
    <img :src="data.border" class="border" />
    <div class="box">
      <img
        class="left"
        src="/source/Chapter1/ArrowForSwiper.jpg"
        @click="changePage(-1)"
      />
      <PhotosBox
        class="photobox"
        :storys="data.photos"
        v-model:nowStory="nowStory"
      ></PhotosBox>
      <img
        class="right"
        src="/source/Chapter1/ArrowForSwiper.jpg"
        @click="changePage(1)"
      />
    </div>
    <img class="nextPage" src="/source/Chapter1/ToNextPage.png" />
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

let ischange = false;
const changeRoute = async (e) => {
  if (ischange) return;
  if (e.deltaY > 0) {
    ischange = true;
    await navigateTo({
      path: `/story-${route.params.id}/page2`,
    });
  } else {
    ischange = true;
    await navigateTo({
      path: `/story-${route.params.id}/title`,
    });
  }
};

onActivated(() => {
  ischange = false;
  setTimeout(() => {
    window.addEventListener("wheel", changeRoute);
  }, 800);
});

onDeactivated(() => {
  window.removeEventListener("wheel", changeRoute);
});
</script>
<style scoped>
.page1 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .border {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -99;
  }
  .nextPage {
    height: 10%;
    width: auto;
    position: absolute;
    bottom: 0%;
    left: 5%;
    z-index: 99;
  }
  .box {
    width: 85%;
    height: 55%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .photobox {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    .left {
      width: 8%;
      height: auto;
      margin-right: -8%;
      transform: rotate(90deg);
    }
    .right {
      width: 8%;
      height: auto;
      margin-left: -8%;
      transform: rotate(-90deg);
    }
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
}
</style>
