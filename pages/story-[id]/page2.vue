<template>
  <div class="page2">
    <img class="bgImg" style="left: 0; top: 0; transform: rotate(180deg)" src="/source/Chapter1/Decoration.png" />
    <img class="bgImg" style="right: 0; bottom: 0" src="/source/Chapter1/Decoration.png" />
    <div class="body">
      <Transition :appear="true" @enter="onEnter" @leave="onLeave">
        <img v-if="aniControl" :src="data.people[nowActive].imgSrc" class="bodyImg" />
      </Transition>

      <div class="leftBox">
        <Transition :appear="true" @enter="onEnterL" @leave="onLeaveL">
          <div v-if="aniControl">
            <p class="name">{{ data.people[nowActive].name }}</p>
            <p class="description">{{ data.people[nowActive].description }}</p>
          </div>
        </Transition>

        <PeopleBox class="thumb" :-thumbnails="data.people" :active="nowActive" v-model:page="nowPage"
          @clickThum="onClickThum">
        </PeopleBox>
      </div>
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
const nowPage = ref(0);
const nowActive = ref(0);
const aniControl = ref(true);
const route = useRoute();
const data = getData(route.params.id);

const onClickThum = (id) => {
  nowActive.value = id;
  aniControl.value = false;
  setTimeout(() => {
    aniControl.value = true;
  }, 250);
};

let isChange = false;

let startTime = 0;
const changeRoute = async (e) => {
  if (Date.now().valueOf() - startTime < 800) return;
  if (isChange) return;
  if (e.deltaY < 0) {
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

const onEnter = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 0,
        transform: "translateX(-4%)",
      },
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
    ],
    {
      duration: 800,
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
        transform: "translateX(2%)",
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
const onEnterL = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 0,
        transform: "translateX(2%)",
      },
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
    ],
    {
      duration: 800,
      easing: "ease-in-out",
      delay: 300,
      fill: "both",
    }
  );
  a.onfinish = () => {
    done();
  };
};
const onLeaveL = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
      {
        opacity: 0,
        transform: "translateX(-1%)",
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
.page2 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url("/source/cursors/Sakura_Arrow.png"), auto;

  .bgImg {
    position: absolute;
    width: auto;
    height: 30%;
    z-index: -1;
  }

  .body {
    width: 90%;
    height: 85%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .bodyImg {
      height: 100%;
      width: 35%;
      overflow: hidden;
    }

    .leftBox {
      width: 70%;
      height: 100%;
      margin-left: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-family: "XiaoDouDao";

      .name {
        font-size: 8vh;
        height: 10vh;
      }

      .description {
        font-size: 3vh;
        height: 25vh;
      }

      .thumb {
        width: 50vw;
        height: auto;
      }
    }
  }

  .nextPage {
    height: 6%;
    width: auto;
    position: absolute;
    bottom: 1%;
    left: 8%;
    z-index: 99;
    animation: shan 3s infinite both alternate ease-in-out;
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
