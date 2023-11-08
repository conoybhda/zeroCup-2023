<template>
  <div>
    <div class="box" ref="box">
      <StoryBox
        class="storyBox"
        v-for="(story, index) in storys"
        :key="index"
        :islocked="story.islocked"
        :src="story.imgSrc"
        :chap="story.chap"
        :title="story.title"
        :isActived="story.isActived"
        :index="index"
        @click="startStory(story.id)"
        :style="`animation-delay: ${story.id * 200}ms;`"
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
const emits = defineEmits(["chooseStory"]);
const instance = getCurrentInstance();

const startStory = (id) => {
  console.log(id);
  if (props.storys[id].islocked) return;
  emits("chooseStory", id);
};
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
  .storyBox {
    flex-shrink: 0;
    width: 20%;
    height: 100%;
    margin: 1%;
    overflow: hidden;
    animation: fadeIn 0.5s ease-in-out both;
    transition: all 0.5s;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(40%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
