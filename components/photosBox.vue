<template>
  <div class="storysBox">
    <img
      src="/icon/left.svg"
      class="icon"
      @click="
        $emit('update:nowStory', (nowStory + storys.length - 1) % storys.length)
      "
    />
    <div class="box">
      <photoBox
        class="storyBox"
        :style="`z-index:${
          storys.length -
          (nowStory > story.id ? nowStory - story.id : story.id - nowStory)
        };transform: translateX(${15 * (story.id - nowStory)}%);`"
        v-for="story in storys"
        :islocked="story.islocked"
        :src="story.imgSrc"
        :clip="`inset(0px ${story.id < nowStory ? 85 : 0}% 0px ${
          story.id > nowStory ? 85 : 0
        }%)`"
        :isActived="story.id === nowStory"
        @click="$emit('update:nowStory', story.id)"
      ></photoBox>
    </div>
    <img
      src="/icon/right.svg"
      class="icon"
      @click="$emit('update:nowStory', (nowStory + 1) % storys.length)"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  storys: {
    type: Array,
    required: true,
  },
  nowStory: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(["update:nowStory"]);
</script>
<style scoped>
.storysBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: auto;
    max-width: 10%;
    height: auto;
    cursor: pointer;
    margin-top: 10%;
    transition: opacity 0.8s;

    &:hover {
      opacity: 0.5;
    }
  }
  .box {
    position: relative;
    width: 80%;
    height: 100%;
    overflow: hidden;
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      #000 5%,
      #000 95%,
      transparent
    );
    mask: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
    .storyBox {
      position: absolute;
      width: 70%;
      height: 100%;
      left: 15%;
      transition: transform 0.5s, opacity 0.5s;
      font-size: 0;

      &::before {
        background-image: linear-gradient(
          -90deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.1) 20%,
          rgba(0, 0, 0, 0.05) 40%,
          transparent 80%
        );
        right: 100%;
      }
      &::after {
        background-image: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.1) 20%,
          rgba(0, 0, 0, 0.05) 40%,
          transparent 80%
        );
        left: 100%;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: opacity 0.3s;
        width: 4rem;
      }
    }
  }
}
</style>
