<template>
  <div>
    <photosBox class="storysBox" :storys="storys"></photosBox>
  </div>
</template>
<script setup>
const storys = ref([
  {
    id: 0,
    islocked: false,
    imgSrc: "/img/a.jpg",
  },
  { id: 1, islocked: true, imgSrc: "/img/a.jpg" },
  { id: 2, islocked: true, imgSrc: "/img/a.jpg" },
  { id: 3, islocked: true, imgSrc: "/img/a.jpg" },
]);
</script>
<style scoped>
.storysBox {
  position: relative;
  width: 70vw;
  height: 50vh;
  margin: 0 auto;
}
</style>
