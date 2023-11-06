<template>
  <div style="font-size: 0">
    <img class="img" :src="src" />
    <div class="box">
      <canvas class="canvas" width="1000" height="1000" ref="canvas"></canvas>
      <span>第一章</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  islocked: {
    type: Boolean,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  const ctx = getCurrentInstance().refs.canvas.getContext("2d");
  const img = new Image();
  img.src = "/icon/lock.svg";
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 1000, 1000);
  };
});
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.3);

  .canvas {
    width: 80%;
    height: auto;
  }
}

.img {
  height: 100%;
}
</style>
