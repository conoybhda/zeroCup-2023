<template>
  <div :class="isActived ? 'storyActive' : ''" class="thebox">
    <img class="storyImg" :style="`clip-path:${clip}`" :src="src" />
  </div>
</template>
<script setup>
const props = defineProps({
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
  opacity: 0.5;
  transition: opacity 0.5s;
  .storyImg {
    width: 100%;
    height: 100%;
    transition: clip-path 0.5s;
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
