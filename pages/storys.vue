<template>
  <div class="storys">
    <img class="bgImg" src="/source/PageTImeline/BackGroundUnColored.png" />
    <StorysBox
      class="storysBox"
      ref="storysBox"
      :storys="storys"
      @choose-story="onChooseStory"
    ></StorysBox>
  </div>
</template>
<script setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
const storys = ref([
  {
    id: 0,
    islocked: false,
    isActived: false,
    imgSrc: "/img/a.jpg",
    chap: "/source/PageTImeline/Chap1.png",
    title: "/source/PageTImeline/Ziqiang.png",
  },
  {
    id: 1,
    islocked: true,
    isActived: false,
    imgSrc: "/img/a.jpg",
    chap: "/source/PageTImeline/Chap2.png",
    title: "/source/PageTImeline/West.png",
  },
  {
    id: 2,
    islocked: true,
    isActived: false,
    imgSrc: "/img/a.jpg",
    chap: "/source/PageTImeline/Chap3.png",
    title: "/source/PageTImeline/Whu.png",
  },
]);

const onChooseStory = async (id) => {
  storys.value[id].isActived = true;
  storys.value[id].islocked = false;
  localStorage.setItem("storys", JSON.stringify(storys.value));
  await navigateTo({
    path: `/story-${id}/title`,
  });
};

onActivated(() => {
  if (localStorage.getItem("storys")) {
    storys.value = JSON.parse(localStorage.getItem("storys"));
  }
});
</script>
<style scoped>
.storys {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .bgImg {
    position: absolute;
    height: 100%;
    width: auto;
    left: 10%;
    z-index: -1;
  }
  .storysBox {
    position: relative;
    width: 70vw;
    height: 70vh;
    margin-top: 20vh;
    margin-left: 5vw;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
