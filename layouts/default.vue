<template>
  <div class="layout">a</div>
  <slot></slot>
</template>
<script setup>
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
