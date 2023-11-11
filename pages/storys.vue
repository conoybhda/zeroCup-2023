<template>
  <div class="storys">
    <img class="bgImg" src="/source/PageTImeline/BackGroundUnColored.png" />
    <StorysBox class="storysBox" ref="storysBox" :storys="storys" @choose-story="onChooseStory"></StorysBox>
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
    imgSrc: "/source/PageTImeline/page1.png",
    chap: "第一幕",
    title: "自强学堂",
  },
  {
    id: 1,
    islocked: true,
    isActived: false,
    imgSrc: "/source/PageTImeline/page2.png",
    chap: "第二幕",
    title: "西迁乐山",
  },
  {
    id: 2,
    islocked: true,
    isActived: false,
    imgSrc: "/source/PageTImeline/page3.png",
    chap: "第三幕",
    title: "巍巍武大",
  },
]);

const onChooseStory = async (id) => {
  storys.value[id].isActived = true;
  if (id + 1 < storys.value.length) storys.value[id + 1].islocked = false;
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
    right: 0;
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
