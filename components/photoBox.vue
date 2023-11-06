<template>
  <div :class="isActived ? 'storyActive' : ''" class="thebox">
    <img class="storyImg" :style="`clip-path:${clip}`" :src="src" />
    <div v-if="islocked" class="lock" :style="`clip-path:${clip}`">
      <img src="/icon/lock.svg" class="storyImg" />
    </div>

    <div v-if="!islocked && isActived" class="hoverStyle">
      <span>点击进入</span>
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
  clip: {
    type: String,
    required: true,
  },
  isActived: {
    type: Boolean,
    required: true,
  },
});
</script>
<style scoped>
.thebox {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  .storyImg {
    width: 100%;
    height: 100%;
    transition: clip-path 0.5s;
  }

  .lock {
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    background-color: rgb(0, 0, 0);
    transition: clip-path 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    .storyImg{
      width: auto;
      height: 50%;
    }
  }

  .hoverStyle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    background-color: rgb(0, 0, 0);
    transition: opacity 0.3s;
    font-size: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.2;
    }
  }
}

.storyActive {
  opacity: 1;

  &::before,
  &::after {
    transition-delay: 0.5s !important;
    opacity: 1 !important;
  }
}
</style>
