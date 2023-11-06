<template>
  <div>
    <img :src="src" draggable="false" class="storyImg" />
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
</script>
<style scoped>
.storyImg {
  height: 100%;
  object-fit: cover;
}
</style>
