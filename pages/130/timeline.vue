<template>
  <div>
    <div>timeline</div>
    <button @click="onclick()"></button>
    <canvas ref="time" class="time"></canvas>
  </div>
</template>
<script setup>
definePageMeta({
  keepalive: false,
});
let canvas = null;
let offscrean = null;
let worker = null;
let a = ref(2022);
const instance = getCurrentInstance();
onActivated(() => {
  canvas = instance.refs.time;
  canvas.width = 2000;
  canvas.height = 2000;
  offscrean = canvas.transferControlToOffscreen();
  worker = new Worker("/worker/canvas.js");
  worker.postMessage({ canvas: offscrean, nowNum: a.value }, [offscrean]);
  worker.postMessage({ nowNum: a.value });
});

const onclick = () => {
  a.value++;
  worker.postMessage({ nowNum: a.value });
};

onDeactivated(() => {
  console.log("onDeactivated");
  worker.terminate();
});
</script>
<style scoped>
.time {
  width: auto;
  height: 50vh;
}
</style>
