<template>
  <div>
    <PeopleBox class="thumb" :Thumbnails="Thumbnails" v-model:page="page" @clickThum="onClickThum"></PeopleBox>
  </div>
</template>

<script setup>
const Thumbnails = ref([
  {
    id: 0,
    isActived: false,
    imgSrc: "/img/a.jpg",
  },
  { id: 1, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 2, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 3, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 4, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 5, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 6, isActived: false, imgSrc: "/img/a.jpg" },
  { id: 7, isActived: false, imgSrc: "/img/a.jpg" },
]);

const page = ref(0);

const onClickThum = (id) => {
  console.log(id);
  Thumbnails.value.forEach((thumb) => {
    thumb.isActived = false;
  });
  Thumbnails.value[id].isActived = true;
};
</script>

<style scoped>
.thumb {
  width: 50vw;
  height: auto;
  position: absolute;
  bottom: 10vh;
  right: 5vw;
  overflow: hidden;
}
</style>
