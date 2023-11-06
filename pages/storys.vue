<template>
  <div>
    <StorysBox class="storysBox" :storys="storys"></StorysBox>
  </div>
</template>
<script setup>
definePageMeta({
  title: "Story",
  description: "Story",
  keepalive: true,
});
import StorysBox from "~/components/storysBox.vue";

const storys = ref([
  {
    id: 0,
    islocked: false,
    imgSrc: "/img/a.jpg",
  },
  { id: 1, islocked: true, imgSrc: "/img/a.jpg" },
  { id: 2, islocked: true, imgSrc: "/img/a.jpg" },
]);
</script>
<style scoped>
.storysBox {
  position: relative;
  width: 70vw;
  height: 70vh;
  margin-top: 20vh;
  margin-left: 5vw;
}
</style>
