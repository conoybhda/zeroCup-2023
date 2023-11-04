<template>
  <div :class="isActived ? 'storyActive' : ''" class="thebox">
    <img class="storyImg" :style="`clip-path:${clip}`" :src="src" />
    <img
      v-if="islocked"
      src="/icon/lock.svg"
      class="storyImg lock"
      :style="`clip-path:${clip}`"
    />
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    background-color: rgb(0, 0, 0);
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
