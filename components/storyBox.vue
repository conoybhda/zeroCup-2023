<template>
  <div ref="box" style="font-size: 0">
    <img class="img" :src="src" />
    <div class="box" :class="isActived ? 'actived' : ''">
      <canvas class="canvas" width="1000" height="1000" ref="canvas"></canvas>
      <img class="chap" :src="chap" />
      <img class="title" :src="title" />
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
  chap: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isActived: {
    type: Boolean,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const lockImg = "/source/PageTImeline/Locked.png";
const clickToEnter = "/source/PageTImeline/ClickToEnter.png";

onMounted(() => {
  const ctx = getCurrentInstance().refs.canvas.getContext("2d");
  const img = new Image();
  img.src = props.islocked ? lockImg : "";
  img.onload = () => {
    ctx.drawImage(img, 100, 100, 800, 800);
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
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  background: url("/source/PageTImeline/Border.png") no-repeat center center /
    100% 100%;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1px);
  transition: all 0.5s;

  .canvas {
    width: 60%;
    height: auto;
    margin-bottom: 5%;
  }

  .chap {
    width: 35%;
    height: auto;
    margin-bottom: 5%;
  }

  .title {
    width: 55%;
    height: auto;
    margin-bottom: 20%;
  }
}

.box.actived {
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
}
.img {
  height: 100%;
}
</style>
