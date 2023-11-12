<template>
  <div class="storys">
    <img v-show="!allActived" class="bgImg" src="/source/PageTImeline/BackGroundUnColored.png" />
    <img v-show="allActived" class="bgImg" src="/source/PageTImeline/BackGroundColored.jpg" />
    <StorysBox class="storysBox" ref="storysBox" :storys="storys" @choose-story="onChooseStory"></StorysBox>
    <NuxtLink to="/ending">
      <img v-if="storys[2].isActived" src="/source/Chapter1/ArrowForSwiper.jpg" class="arrow" />
    </NuxtLink>
    <NuxtLink v-show="allActived" to="/timeline">
      <img class="totimeline" src="/source/PageTImeline/switchTimeline.png" />
    </NuxtLink>
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

const allActived = ref(false);

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
  allActived.value = storys.value.every((story) => story.isActived);
  console.log('allActived', allActived.value);
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
    mask: linear-gradient(90deg, transparent, #fff);
  }

  .storysBox {
    position: relative;
    width: 70vw;
    height: 70vh;
    margin-top: 20vh;
    margin-left: 5vw;
  }

  .arrow {
    position: absolute;
    width: 5vw;
    height: 10vw;
    bottom: 1vw;
    right: 10vw;
    transform: rotate(-90deg);
    z-index: 1;
    animation: arrow 4s 1;
  }
}

@keyframes arrow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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

.totimeline {
  position: absolute;
  top: 5vh;
  right: 10vh;
  width: 10vh;
}

.totimeline:hover {
  cursor: pointer;
}
</style>
