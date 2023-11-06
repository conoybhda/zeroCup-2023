<template>
  <div>
    <div class="tem">
      <img
        class="img"
        :style="
          isActived ? 'transition: none; transform: translateX(-10%);' : ''
        "
        :src="imgSrc"
      />
      <div class="mask" :class="isActived ? 'active' : ''">
        <span class="name">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: "/img/a.jpg",
  },
  name: {
    type: String,
    default: "Hello",
  },
  isActived: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.tem {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  z-index: 1;
  .img {
    display: inline;
    height: 100%;
    width: auto;
    transition: all 1s ease-in-out;
  }
  .mask {
    transform: translateY(-100%);
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    transition: all 0.3s ease-in-out;
    .name {
      position: absolute;
      bottom: 0;
      color: rgb(255, 255, 255);
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
    }
  }
  .active {
    opacity: 0;
  }
  &:hover {
    .img {
      transform: translateX(-10%);
    }
    .mask {
      background-color: #fdfd1f6e;
      .name {
        color: #000;
      }
    }
    .active {
      opacity: 1;
    }
  }
}

.disabled {
  pointer-events: none;
}
</style>
