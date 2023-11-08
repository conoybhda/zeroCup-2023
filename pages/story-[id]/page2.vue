<template>
  <div class="page2">
    <img
      class="bgImg"
      style="left: 0; top: 0; transform: rotate(180deg)"
      src="/source/Chapter1/Decoration.png"
    />
    <img
      class="bgImg"
      style="right: 0; bottom: 0"
      src="/source/Chapter1/Decoration.png"
    />
    <div class="body">
      <img :src="data.people[nowActive].imgSrc" class="bodyImg" />
      <div class="leftBox">
        <p>{{ data.people[nowActive].name }}</p>
        <p>{{ data.people[nowActive].description }}</p>
        <PeopleBox
          class="thumb"
          :-thumbnails="data.people"
          :active="nowActive"
          v-model:page="nowPage"
          @clickThum="onClickThum"
        >
        </PeopleBox>
      </div>
    </div>
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

const route = useRoute();
const data = getData(route.params.id);

const onClickThum = (id) => {
  nowActive.value = id;
};

let ischange = false;

const changeRoute = async (e) => {
  if (ischange) return;
  if (e.deltaY < 0) {
    ischange = true;
    await navigateTo({
      path: `/story-${route.params.id}/page1`,
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
.page2 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
      .thumb {
        width: 50vw;
        height: auto;
      }
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
