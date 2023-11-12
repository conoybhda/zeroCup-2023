<template>
  <Transition name="fade1">
    <div class="body">
      <div class="container">
        <div class="elements-slide-in">
          <img class="ele-top ele" :src="staticData[index].topSrc" />
          <img class="ele-bottom ele" :src="staticData[index].bottomSrc" />
          <img class="ele-left ele" :src="staticData[index].leftSrc" />
          <img class="ele-right ele" :src="staticData[index].rightSrc" />
          <img class="ele-center ele" :src="staticData[index].centerSrc" />
        </div>
        <div class="elements-trans">
          <div class="ele-real"></div>
        </div>
        <NuxtLink to="/conclusion">
          <div v-if="Clickable" class="container-mask">
            <img class="forward" src="/source/page-ending/forward.png" />
          </div>
        </NuxtLink>
      </div>
      <div v-for="(item, index) in pictureData" :class="item.classname">
        <img class="container-add-pic" :src="item.src" />
        <div class="container-content">
          <div class="content-title">{{ item.title }}</div>
          <div class="content-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
const staticData = [
  {
    topSrc: "",
    bottomSrc: "/source/page-ending/XingZhengLou-bottom.png",
    leftSrc: "/source/page-ending/XingZhengLou-left.png",
    rightSrc: "/source/page-ending/XingZhengLou-right.png",
    centerSrc: "/source/page-ending/XingZhengLou-middle.png",
    realSrc: "/source/page-ending/XingZhengLouForReal.png",
  },
];
const index = 0;
const Clickable = ref(false);
const pictureData = [
  {
    src: "/source/page-ending/pic3.jpg",
    classname: "container-left container-addi",
    title: "白宫",
    text: "武大医学人承继着以朱裕璧先生为代表的老一辈医学专家流传的精神和情怀，奋楫争先、勇立潮头，医学事业取得了显著成绩，实现了快速发展。武大医学人坚守初心，医路前行，不断创造武汉大学医学新的辉煌，为推进中国式现代化建设做出武汉大学医学贡献。",
  },
  {
    src: "/source/page-ending/pic4.jpg",
    classname: "container-right container-addi",
    title: "理学楼",
    text: "理学楼位于武汉大学文理学部，隔着奥场与行政楼遥遥相望，背临东湖。北面理学院主露穹窿圆屋顶与南面工学院四角重檐攒尖顶遥相呼应，体现出“天圆地方”（北圆南方）的传统建筑理念。",
  },
  {
    src: "/source/page-ending/pic5.jpg",
    classname: "container-left-top container-addi",
    title: "信息学部",
    text: "武汉大学信息学部是原武汉测绘科技大学。2000年原武汉大学、武汉水利电力大学、武汉测绘科技大学、湖北医科大学合并成新的武汉大学后成为武汉大学信息学部。",
  },
  {
    src: "/source/page-ending/pic1.jpg",
    classname: "container-top container-addi",
    title: "樱顶",
    text: "在独静的时候，去樱顶看日出；在寂静的午后，去樱顶看落日都会是一种美妙的感觉。樱顶也可以使一座浪漫之地，它会被幸福的人称作“樱花城堡”，在这里欣赏武大美景的时候，甜蜜的人往往会心生温暖。",
  },
  {
    src: "/source/page-ending/pic2.jpg",
    classname: "container-right-top container-addi",
    title: "老图书馆",
    text: "老图书馆在结构技术上采用钢筋混凝土框架和组合式钢桁架混合结构承重，为中国近代建筑史上率先采用新结构、新材料、新技术仿中国古典建筑的成功之作，同时也是中西建筑设计理论、技艺、手法相互渗透、融会贯通的佳作，体现了当时的文化潮流、科学技术和时代精神。",
  },
  {
    src: "/source/page-ending/pic6.jpg",
    classname: "container-left-bottom container-addi",
    title: "弘毅大道",
    text: "“士不可以不弘毅，任重而道远”这便是武大对每一位学子的殷切期许与谆谆教诲。",
  },
  {
    src: "/source/page-ending/pic7.jpg",
    classname: "container-bottom container-addi",
    title: "信息学部图书馆",
    text: "武汉大学图书馆信息科学分馆（简称信息分馆）位于信息科学学部的中心，信息科学分馆将是新技术、新产品的体验馆；学生创新作品的展示馆；学生创新思维的发源地；学生学习、休闲的温馨之家。",
  },
  {
    src: "/source/page-ending/pic8.jpg",
    classname: "container-right-bottom container-addi",
    title: "樱花大道",
    text: "1972年中日建交后，日本友人曾赠与周恩来总理一些樱花树苗，周恩来总理将这批友谊之花转赠与武汉大学，植于武汉大学行政楼、新闻院、樱花大道等地。这批樱花树已经寿终正寝，但是日本友人们后来陆续赠送的樱花树仍在每年的3月中下旬至4月上旬绚烂开放。",
  },
];

onActivated(() => {
  Clickable.value = false;
  setTimeout(() => {
    Clickable.value = true;
  }, 6000);
});
</script>

<style scoped>
.body {
  overflow: hidden;
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  animation: zoom 1.5s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 6s;
  border: solid 7px #41403e;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

.container-mask {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #313131;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
}

.forward {
  width: 10vw;
  position: absolute;
  left: calc(50% - 10vw / 2);
  top: calc(50% - 10vw / 2);
  animation-delay: 6s;
  z-index: 1001;
  opacity: 0;
  transition: 0.5s;
}

.container:hover .container-mask {
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.container:hover .forward {
  opacity: 1;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.ele {
  width: 80vw;
  position: absolute;
  left: calc(50% - 80vw / 2);
  opacity: 0;
  margin-top: 5vh;
}

.ele-top {
  animation: slideIn 1s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  z-index: 2;
}

.ele-left {
  animation: slideIn 1s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  z-index: 3;
}

.ele-right {
  animation: slideIn 1.2s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  z-index: 3;
}

.ele-bottom {
  animation: slideIn 1s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 4;
}

.ele-center {
  animation: slideIn 1.5s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  z-index: 3;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50vh);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ele-real {
  z-index: 100;
  opacity: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  mask: url("/source/page-ending/maskSource.png");
  mask-size: 7100% 100%;
  animation: maskMove 1.4s steps(70) forwards;
  background: url("/source/page-ending/XingZhengLouForReal.png");
  background-size: 100% 100%;
  animation-delay: 4s;
}

@keyframes shining {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  0% {
    opacity: 0;
  }
}

@keyframes maskMove {
  from {
    mask-position: 0 0;
  }

  to {
    mask-position: 100% 0;
  }
}

@keyframes showUp {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes zoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.3);
  }
}

.container-addi {
  width: 30vw;
  height: 30vh;
  position: absolute;
  border: solid 7px #41403e;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  animation: showUp 2s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 6.5s;
  opacity: 0;
  transition: 0.5s;
}

.container-add-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotateY(0);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}

.container-content {
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
  display: block;
  color: white;
  background-size: cover !important;
  background-position: center !important;
  padding: 1em 2em;
  background: #313131;
  border-radius: 10px;
  opacity: 0;
  position: absolute;
  top: 0;
}

.container-addi:hover .container-content {
  transform: rotateY(0deg);
  opacity: 1;
}

.container-addi:hover .container-add-pic {
  transform: rotateY(180deg);
}

.container-left {
  top: 35vh;
  left: 2vw;
}

.container-right {
  top: 35vh;
  right: 2vw;
}

.container-top {
  top: 2vh;
  left: 35vw;
}

.container-left-top {
  top: 2vh;
  left: 2vw;
}

.container-right-top {
  top: 2vh;
  right: 2vw;
}

.container-left-bottom {
  bottom: 2vh;
  left: 2vw;
}

.container-bottom {
  bottom: 2vh;
  left: 35vw;
}

.container-right-bottom {
  bottom: 2vh;
  right: 2vw;
}

.mask {
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: 10000;
  display: block;
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  filter: blur(0);
}

.content-title {
  font-family: "XiaoDouDao";
  font-size: 1.5em;
  margin-bottom: 0.5em;
  text-align: center;
}

.content-text {
  font-family: "XiaoDouDao";
  font-size: 1.25em;
}
</style>
