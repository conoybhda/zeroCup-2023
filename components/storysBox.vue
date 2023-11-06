<template>
  <div>
    <div class="box">
      <StoryBox
        class="storyBox"
        v-for="(story, index) in storys"
        :islocked="story.islocked"
        :src="story.imgSrc"
      ></StoryBox>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  storys: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-behavior: smooth;

  .storyBox {
    flex-shrink: 0;
    width: 20%;
    height: 100%;
    margin: 1%;
    overflow: hidden;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      width: 40%;
    }
  }
}
</style>
