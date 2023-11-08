<template>
  <div class="layout">{{ a }}</div>
  <slot></slot>
</template>
<script setup>
const a = ref("");
const router = useRouter();
onMounted(() => {
  console.log("mounted");
});
onUpdated(() => {
  a.value = router.currentRoute.value.path;
});
</script>
<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: -99;
}
</style>
