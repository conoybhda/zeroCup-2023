<template>
  <div ref="box" style="font-size: 0">
    <img class="img" :src="src" />
    <div class="box" :class="isActived ? 'actived' : ''">
      <canvas v-if="!props.isActived" class="canvas" width="1000" height="1000" ref="canvas"></canvas>
      <span class="chap">{{ chap }}</span>
      <span class="title"> {{ title }}</span>
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
const lockImg = {
  src: "/source/PageTImeline/Locked.png",
  width: 800,
  height: 800,
};
const clickToEnter = {
  src: "/source/PageTImeline/enter.png",
  width: 1000,
  height: 250,
};

onActivated(() => {
  if (props.isActived) return;
  const ctx = getCurrentInstance().refs.canvas.getContext("2d");
  ctx.clearRect(0, 0, 1000, 1000);
  let img = new Image();
  let width = props.islocked ? lockImg.width : clickToEnter.width;
  let height = props.islocked ? lockImg.height : clickToEnter.height;
  img.src = props.islocked ? lockImg.src : clickToEnter.src;
  img.onload = () => {
    ctx.drawImage(img, (1000 - width) / 2, (1000 - height) / 2, width, height);
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
  background: url("/source/PageTImeline/Border.png") no-repeat center center / 100% 100%;
  background-color: #a1a1a19a;
  backdrop-filter: blur(2px);
  transition: all 0.5s;
  font-family: "XiaoDouDao";

  .canvas {
    width: 60%;
    height: auto;
    margin-bottom: 5%;
  }

  .chap {
    font-size: 5vh;
    margin-bottom: 5%;
  }

  .title {
    font-size: 6vh;
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
