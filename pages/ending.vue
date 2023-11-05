<template>
  <div class="container">
    <div class="elements-slide-in">
      <img class="ele-top ele" src="../public/source/page-ending/YingDing-top.png">
      <img class="ele-bottom ele" src="../public/source/page-ending/YingDing-bottom.png">
      <img class="ele-left ele" src="../public/source/page-ending/YingDing-left.png">
      <img class="ele-right ele" src="../public/source/page-ending/YingDing-right.png">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .container {
    position: relative;
  }
  .ele {
    width: 533px;
    position: absolute;
    left: calc(50% - 533px / 2);
    opacity: 0;
  }
  .ele-top {
    animation: slideIn 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .ele-left {
    animation: slideIn 1s ease-in-out;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
  .ele-right {
    animation: slideIn 1s ease-in-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .ele-bottom {
    animation: slideIn 1s ease-in-out;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(100vh);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>