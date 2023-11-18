<template>
  <div class="page1">
    <img :src="data.border" class="border" />
    <div class="box">
      <img class="left" src="/source/Chapter1/ArrowForSwiper.jpg" @click="changePage(-1)" />
      <PhotosBox class="photobox" :storys="data.photos" v-model:nowStory="nowStory"></PhotosBox>
      <img class="right" src="/source/Chapter1/ArrowForSwiper.jpg" @click="changePage(1)" />
    </div>
    <div class="description">
      <Transition :appear="true" @enter="onEnter" @leave="onLeave">
        <div v-if="aniControl">{{ data.photos[nowStory].description }}</div>
      </Transition>
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
const aniControl = ref(true);
const changePage = (num) => {
  if (nowStory.value + num < 0) {
    nowStory.value = data.photos.length;
  }
  nowStory.value = (nowStory.value + num) % data.photos.length;
};

watch(nowStory, (val) => {
  aniControl.value = false;
  setTimeout(() => {
    aniControl.value = true;
  }, 300);
});

let isChange = false;
let startTime = 0;
const changeRoute = async (e) => {
  if (Date.now().valueOf() - startTime < 800) return;
  if (isChange) return;
  if (e.deltaY > 0) {
    isChange = true;
    await navigateTo({
      path: `/story-${route.params.id}/page2`,
    });
  } else {
    isChange = true;
    await navigateTo({
      path: `/story-${route.params.id}/title`,
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

const onEnter = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 0,
        transform: "translateX(5%)",
      },
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
    ],
    {
      duration: 400,
      easing: "ease-in-out",
      delay: 300,
      fill: "both",
    }
  );
  a.onfinish = () => {
    done();
  };
};

const onLeave = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
      {
        opacity: 0,
        transform: "translateX(-2%)",
      },
    ],
    {
      duration: 300,
      easing: "ease-in-out",
    }
  );
  a.onfinish = () => {
    done();
  };
};
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
    height: 8%;
    width: auto;
    position: absolute;
    bottom: 0%;
    left: 5%;
    z-index: 99;
    animation: shan 3s infinite both alternate ease-in-out;
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
      transition: all 0.5s;
    }

    .left:hover {
      cursor: pointer;
      transform: scale(1.05) rotate(90deg);
    }

    .right {
      width: 8%;
      height: auto;
      margin-left: -8%;
      transform: rotate(-90deg);
      transition: all 0.5s;
    }

    .right:hover {
      cursor: pointer;
      transform: scale(1.05) rotate(-90deg);
    }
  }

  .description {
    width: 85%;
    height: 12%;
    font-family: "XiaoDouDao";
    margin-top: 2vh;
    font-size: 2vw;
  }
}

@keyframes shan {
  0% {
    opacity: 0.2;
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
  filter: blur(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  filter: blur(0);
}
</style>
