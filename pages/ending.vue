<template>
  <Transition name="fade1" v-show="isShow">
    <div class="body">
      <div class="container">
        <div class="elements-slide-in">
          <img class="ele-top ele" :src="staticData[index].topSrc">
          <img class="ele-bottom ele" :src="staticData[index].bottomSrc">
          <img class="ele-left ele" :src="staticData[index].leftSrc">
          <img class="ele-right ele" :src="staticData[index].rightSrc">
          <img class="ele-center ele" :src="staticData[index].centerSrc">
        </div>
        <div class="elements-trans">
          <div class="ele-real"></div>
        </div>
        <div class="container-mask" @click="isShow = false">
          <img class="forward" src="../public/source/page-ending/forward.png">
        </div>
      </div>
      <div v-for="(item, index) in pictureData" :class="item.classname">
        <img class="container-add-pic" :src="item.src">
        <div class="container-content">
          <div class="content-title">{{ item.title }}</div>
          <div class="content-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </Transition>
  <div class="fade2" v-show="!isShow">
    <div class="conclusion">
      <div class="conclusion-line">我校溯承1893年自强学堂之绪，</div><br />
      <div class="conclusion-line">先后历方言学堂、国立武昌高等师范学校、国立武昌大学、国立武昌中山大学，</div><br />
      <div class="conclusion-line">1928年国立武汉大学奠基珞珈，</div><br />
      <div class="conclusion-line">1950年改称武汉大学，</div><br />
      <div class="conclusion-line">又于新纪千禧，四校归合，文理工医，完璧玉成，继文统，续学脉，沿流以迄，已一百廿九载。</div><br />
      <div class="conclusion-line">武汉大学肇立于民族救危亡求自立之际，秉“古来世运之明晦，人才之盛衰，其表在政，其里在学”之教，</div><br />
      <div class="conclusion-line">草创造营，朴诚勇毅，以“不办则已，要办就当办一所有崇高理想，一流水准的大学”自持。</div><br />
      <div class="conclusion-line">江山鼎沸之间，师生不避牺牲，以济世安邦之志，明道淑人之心，投身报效。</div><br />
      <div class="conclusion-line">国家建设之时，我校殷勤办学，崇尚学术；</div><br />
      <div class="conclusion-line">改革开放伊始建言恢复高考；推动教育教学大改革，不拘一格作育人才，桃李芳华；以实践为检验真理的标准，勇立潮头。</div><br />
      <div class="conclusion-line">百余年中，山水流风，明诚弘毅，其梦想与光荣，与民族存亡复兴相终始，共命运，同进退。</div><br />
      <div class="conclusion-line">旧邦而膺新命，君子以常德行。</div><br />
      <div class="conclusion-line">新时代启航，武汉大学以谋求人类福祉、推动社会进步、实现国家富强为己任；</div><br />
      <div class="conclusion-line">以人才强校、学生为本立校，引领学术，栽培新知。</div><br />
      <div class="conclusion-line">务本、正学，含弘邃雅；务通、新政，经纶乾行。</div><br />
      <div class="conclusion-line">济济多士，勠力竭诚，科教兴邦，立德树人，响应民生，服务社会，为国家战略和乡邦建设赋智赋能，有声于殊域八方。</div><br />
      <div class="conclusion-line">穆穆黉门，包容刚健，以和为美，更得到广大热爱和怀想母校的校友英才的倾力反哺。</div><br />
      <div class="conclusion-line">而今我校综合实力蒸蒸日上，面貌焕然，求新知而尚真理，笃实辉光，日新月异，正向中国特色、世界一流大学勇毅前行。</div><br />
      <div class="conclusion-line">“东湖之滨，珞珈山上，这是我们亲爱的学堂。”</div><br />
      <div class="conclusion-line">追往昔而待来者，惟自强与时偕行，弘毅任仁致远，求是学以聚之，拓新创开未来。</div><br />
      <div class="conclusion-line">方今百卅校庆将至，专此略陈端绪，示启新章。</div><br />
    </div>
    <img class="conclusion-pic" src="../public/source/page-ending/130logo.jpg">
    <div class="continue" @click="navigate">点击以继续</div>
  </div>
</template>

<script setup>
const staticData = [{
  topSrc: "",
  bottomSrc: 'source/page-ending/XingZhengLou-bottom.png',
  leftSrc: 'source/page-ending/XingZhengLou-left.png',
  rightSrc: 'source/page-ending/XingZhengLou-right.png',
  centerSrc: 'source/page-ending/XingZhengLou-middle.png',
  realSrc: 'source/page-ending/XingZhengLouForReal.png'
}];
const index = 0;
const pictureData = [
  {
    src: "source/page-ending/pic3.jpg",
    classname: "container-left container-addi",
    title: "白宫",
    text: "武大医学人承继着以朱裕璧先生为代表的老一辈医学专家流传的精神和情怀，奋楫争先、勇立潮头，医学事业取得了显著成绩，实现了快速发展。武大医学人坚守初心，医路前行，不断创造武汉大学医学新的辉煌，为推进中国式现代化建设做出武汉大学医学贡献。"
  },
  {
    src: "source/page-ending/pic4.jpg",
    classname: "container-right container-addi",
    title: "理学楼",
    text: "理学楼位于武汉大学文理学部，隔着奥场与行政楼遥遥相望，背临东湖。北面理学院主露穹窿圆屋顶与南面工学院四角重檐攒尖顶遥相呼应，体现出“天圆地方”（北圆南方）的传统建筑理念。"
  },
  {
    src: "source/page-ending/pic5.jpg",
    classname: "container-left-top container-addi",
    title: "信息学部",
    text: "武汉大学信息学部是原武汉测绘科技大学。2000年原武汉大学、武汉水利电力大学、武汉测绘科技大学、湖北医科大学合并成新的武汉大学后成为武汉大学信息学部。"
  },
  {
    src: "source/page-ending/pic1.jpg",
    classname: "container-top container-addi",
    title: "樱顶",
    text: "在独静的时候，去樱顶看日出；在寂静的午后，去樱顶看落日都会是一种美妙的感觉。樱顶也可以使一座浪漫之地，它会被幸福的人称作“樱花城堡”，在这里欣赏武大美景的时候，甜蜜的人往往会心生温暖。"
  },
  {
    src: "source/page-ending/pic2.jpg",
    classname: "container-right-top container-addi",
    title: "老图书馆",
    text: "老图书馆在结构技术上采用钢筋混凝土框架和组合式钢桁架混合结构承重，为中国近代建筑史上率先采用新结构、新材料、新技术仿中国古典建筑的成功之作，同时也是中西建筑设计理论、技艺、手法相互渗透、融会贯通的佳作，体现了当时的文化潮流、科学技术和时代精神。"
  },
  {
    src: "source/page-ending/pic6.jpg",
    classname: "container-left-bottom container-addi",
    title: "弘毅大道",
    text: "“士不可以不弘毅，任重而道远”这便是武大对每一位学子的殷切期许与谆谆教诲。"
  },
  {
    src: "source/page-ending/pic7.jpg",
    classname: "container-bottom container-addi",
    title: "信息学部图书馆",
    text: "武汉大学图书馆信息科学分馆（简称信息分馆）位于信息科学学部的中心，信息科学分馆将是新技术、新产品的体验馆；学生创新作品的展示馆；学生创新思维的发源地；学生学习、休闲的温馨之家。"
  },
  {
    src: "source/page-ending/pic8.jpg",
    classname: "container-right-bottom container-addi",
    title: "樱花大道",
    text: "1972年中日建交后，日本友人曾赠与周恩来总理一些樱花树苗，周恩来总理将这批友谊之花转赠与武汉大学，植于武汉大学行政楼、新闻院、樱花大道等地。这批樱花树因为年龄原因也已经寿终正寝，但是“友谊之花二代”以及日本友人们后来陆续赠送的樱花树仍在每年的3月中下旬至4月上旬绚烂开放。"
  }
];

const isShow = ref(true);

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
  border: solid 7px #41403E;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, .2);
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
  mask: url("public/source/page-ending/maskSource.png");
  mask-size: 7100% 100%;
  animation: maskMove 1.4s steps(70) forwards;
  background: url("public/source/page-ending/XingZhengLouForReal.png");
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
  border: solid 7px #41403E;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, .2);
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
  transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
  transition-duration: .5s;
  transition-property: transform, opacity;
}

.container-content {
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
  transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
  transition-duration: .5s;
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

.fade1-enter-from,
.fade1-leave-to {
  opacity: 0;
}

.fade1-enter-active,
.fade1-leave-active {
  transition: all 0.5s;
}

.fade2-enter-from,
.fade2-leave-to {
  opacity: 0;
}

.fade2 {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.conclusion {
  text-align: center;
  transform: translateY(100vh);
  animation: move 30s linear forwards;
  font-family: "XiaoDouDao";
  font-size: 42px;
  line-height: 100px;
  width: 90vw;
  margin-left: 5vw;
}

@keyframes move {
  from {
    transform: translateY(150vh);
  }

  to {
    transform: translateY(-5000px);
  }
}

.conclusion-line {
  position: relative;
  transition: all 0.36s;
}

.conclusion-line:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.conclusion-line:hover::before {
  width: 80vw;
}

.conclusion-line::before {
  content: '';
  height: 4px;
  background: black;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  left: 5vw;
  transition: width 0.36s;
}

.conclusion-pic {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: showUp 2s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 31s;
}

.continue {
  position: absolute;
  bottom: 5vh;
  left: calc(50% - 150px);
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-family: "XiaoDouDao";
  color: black;
  opacity: 0;
  animation: shining linear 2s infinite;
  animation-fill-mode: forwards;
  animation-delay: 31s;
  transition: 0.5s;
}

.continue:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>