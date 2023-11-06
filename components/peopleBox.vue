<template>
  <div class="tem">
    <Transition :appear="true" @enter="onEnter" @leave="onLeave">
      <div class="numBox" v-if="ischange" :data-index="0">
        {{
          `${MaxNum * page + 1}-${
            MaxNum * (page + 1) > Thumbnails.length
              ? Thumbnails.length
              : MaxNum * (page + 1)
          }/${Thumbnails.length}`
        }}
      </div>
    </Transition>

    <div class="ThumbnailBox">
      <img src="/icon/left.svg" class="icon" @click="changePage(-1)" />
      <div class="box" ref="box">
        <transition-group :appear="true" @enter="onEnter" @leave="onLeave">
          <People
            v-for="(thumb, index) in NowThumbnails"
            :key="thumb.id"
            class="thumb"
            :img-src="thumb.imgSrc"
            :data-index="index"
            :isActived="thumb.isActived"
            @click="emits('clickThum', thumb.id)"
          ></People>
        </transition-group>
      </div>
      <img src="/icon/right.svg" class="icon" @click="changePage(1)" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["Thumbnails", "page"]);
const emits = defineEmits(["clickThum", "update:page"]);
const { Thumbnails } = toRefs(props);
const MaxNum = 3;
const ischange = ref(true);
const box = ref(null);
const NowThumbnails = computed(() => {
  return Thumbnails.value.slice(props.page * MaxNum, (props.page + 1) * MaxNum);
});

const changePage = (e) => {
  let t = props.page;
  if (t + e < 0) {
    t = Math.ceil(Thumbnails.value.length / MaxNum) - 1;
  } else {
    t = (t + e) % Math.ceil(Thumbnails.value.length / MaxNum);
  }
  emits("update:page", t);
  ischange.value = !ischange.value;
  setTimeout(() => {
    ischange.value = !ischange.value;
  }, 200);
};

const onEnter = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 0,
        transform: "translateX(40%)",
      },
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
    ],
    {
      duration: 600,
      easing: "ease-in-out",
      delay: el.dataset.index * 100 + 400,
      fill: "both",
    }
  );
  a.onfinish = () => {
    done();
  };
};

const onLeave = (el, done) => {
  let a = el.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0%)",
      },
      {
        opacity: 0,
        transform: "translateX(-20%)",
      },
    ],
    {
      duration: 300,
      easing: "ease-in-out",
    }
  );
  a.onfinish = () => {
    done();
  };
};
</script>
<style scoped>
.tem {
  display: flex;
  flex-direction: column;
  .numBox {
    position: relative;
    margin-left: auto;
    margin-right: 17%;
    margin-bottom: 1%;
    font-size: 2vw;
    display: flex;
    justify-content: center;
  }

  .ThumbnailBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5%;
    .icon {
      width: auto;
      max-width: 10%;
      height: auto;
      cursor: pointer;
      margin-top: 20%;
      transition: opacity 0.8s;

      &:hover {
        opacity: 0.5;
      }
    }

    .box {
      width: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5%;
    }
    .thumb {
      flex-shrink: 0;
      width: 30%;
      aspect-ratio: 1/2;
      overflow: hidden;
    }
  }
}
</style>
