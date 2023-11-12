<template>
  <canvas ref="root" class="layout"></canvas>
  <slot></slot>
</template>
<script setup>
let canvas = null;
let offscrean = null;
let worker = null;
const router = useRouter();
const instance = getCurrentInstance();
onMounted(() => {
  canvas = instance.refs.root;
  canvas.width = 8000;
  canvas.height = 1200;
  offscrean = canvas.transferControlToOffscreen();
  worker = new Worker("/worker/rootCanvas.js");
  worker.postMessage(
    { canvas: offscrean, nowNum: router.currentRoute.value.path },
    [offscrean]
  );

  console.log("mounted");
});
onUpdated(() => {
  worker.postMessage({ nowNum: router.currentRoute.value.path });
});
onUnmounted(() => {
  console.log("onUnmounted");
  worker.terminate();
});
</script>
<style scoped>
.layout {
  width: 30vw;
  height: 10vh;
  overflow: hidden;
  position: absolute;
  z-index: -99;
}
</style>
