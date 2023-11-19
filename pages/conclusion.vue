<template>
  <div style="cursor: url('/source/cursors/Sakura_Arrow.png'), auto;">
    <div v-if="isShow" class="fade2">
      <div class="conclusion">
        <div class="conclusion-line">我校溯承1893年自强学堂之绪，</div>
        <br />
        <div class="conclusion-line">
          先后历方言学堂、国立武昌高等师范学校、国立武昌大学、国立武昌中山大学，
        </div>
        <br />
        <div class="conclusion-line">1928年国立武汉大学奠基珞珈，</div>
        <br />
        <div class="conclusion-line">1950年改称武汉大学，</div>
        <br />
        <div class="conclusion-line">
          又于新纪千禧，四校归合，文理工医，完璧玉成，继文统，续学脉，沿流以迄，已一百廿九载。
        </div>
        <br />
        <div class="conclusion-line">
          武汉大学肇立于民族救危亡求自立之际，秉“古来世运之明晦，人才之盛衰，其表在政，其里在学”之教，
        </div>
        <br />
        <div class="conclusion-line">
          草创造营，朴诚勇毅，以“不办则已，要办就当办一所有崇高理想，一流水准的大学”自持。
        </div>
        <br />
        <div class="conclusion-line">
          江山鼎沸之间，师生不避牺牲，以济世安邦之志，明道淑人之心，投身报效。
        </div>
        <br />
        <div class="conclusion-line">
          国家建设之时，我校殷勤办学，崇尚学术；
        </div>
        <br />
        <div class="conclusion-line">
          改革开放伊始建言恢复高考；推动教育教学大改革，不拘一格作育人才，桃李芳华；以实践为检验真理的标准，勇立潮头。
        </div>
        <br />
        <div class="conclusion-line">
          百余年中，山水流风，明诚弘毅，其梦想与光荣，与民族存亡复兴相终始，共命运，同进退。
        </div>
        <br />
        <div class="conclusion-line">旧邦而膺新命，君子以常德行。</div>
        <br />
        <div class="conclusion-line">
          新时代启航，武汉大学以谋求人类福祉、推动社会进步、实现国家富强为己任；
        </div>
        <br />
        <div class="conclusion-line">
          以人才强校、学生为本立校，引领学术，栽培新知。
        </div>
        <br />
        <div class="conclusion-line">
          务本、正学，含弘邃雅；务通、新政，经纶乾行。
        </div>
        <br />
        <div class="conclusion-line">
          济济多士，勠力竭诚，科教兴邦，立德树人，响应民生，服务社会，为国家战略和乡邦建设赋智赋能，有声于殊域八方。
        </div>
        <br />
        <div class="conclusion-line">
          穆穆黉门，包容刚健，以和为美，更得到广大热爱和怀想母校的校友英才的倾力反哺。
        </div>
        <br />
        <div class="conclusion-line">
          而今我校综合实力蒸蒸日上，面貌焕然，求新知而尚真理，笃实辉光，日新月异，正向中国特色、世界一流大学勇毅前行。
        </div>
        <br />
        <div class="conclusion-line">
          “东湖之滨，珞珈山上，这是我们亲爱的学堂。”
        </div>
        <br />
        <div class="conclusion-line">
          追往昔而待来者，惟自强与时偕行，弘毅任仁致远，求是学以聚之，拓新创开未来。
        </div>
        <br />
        <div class="conclusion-line">
          方今百卅校庆将至，专此略陈端绪，示启新章。
        </div>
        <br />
      </div>
    </div>
    <template v-else>
      <img class="conclusion-pic" src="../public/source/page-ending/130logo.jpg" />
      <NuxtLink to="/">
        <div class="continue">点击以继续</div>
      </NuxtLink>
    </template>
    <div v-if="isShow" class="skip" @click="isShow = false">
      <img class="skipImg" src="/source/page-ending/skip-forward.svg" />
    </div>
    <Sakura></Sakura>
  </div>
</template>
<script setup>
const isShow = ref(true);
onActivated(() => {
  isShow.value = true;
  setTimeout(() => {
    isShow.value = false;
  }, 27000);
});
</script>
<style scoped>
.skip {
  position: absolute;
  height: 10vh;
  width: auto;
  bottom: 2vh;
  right: 2vh;
  transition: all 0.5s;

  .skipImg {
    height: 100%;
    width: auto;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
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

.conclusion-line::before {
  content: "";
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
  transition: 0.5s;
}

.continue:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@keyframes showUp {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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
</style>
