<template>
  <body data-spy="scroll" data-target="#navbar-example">
    <div class="wrapper">
      <nav class="nav__wrapper" id="navbar-example">
        <ul class="nav">
          <li role="presentation" :class="states[0]">
            <a href="#section1">
              <span class="nav__counter">01</span>
              <h3 class="nav__title">武大新貌</h3>
              <p class="nav__body">
                刘道玉担任武大校长，在校内推行一系列教学和管理体制改革措施，大力开展与世界著名大学合作交流，使武大迎来了文革后的第一个快速发展期。
              </p>
            </a>
          </li>

          <li role="presentation" :class="states[1]">
            <a href="#section2">
              <span class="nav__counter">02</span>
              <h3 class="nav__title">百年校庆</h3>
              <p class="nav__body">
                经过考证，武汉大学的校史从1893年成立的湖北自强学堂算起。1993年11月29日，武汉大学举行建校一百周年纪念大会。
              </p>
            </a>
          </li>

          <li role="presentation" :class="states[2]">
            <a href="#section3">
              <span class="nav__counter">03</span>
              <h3 class="nav__title">四校合并</h3>
              <p class="nav__body">
                2000年8月2日，武汉大学、武汉水利电力大学、武汉测绘科技大学、湖北医科大学合并组建新的武汉大学。
              </p>
            </a>
          </li>

          <li role="presentation" :class="states[3]">
            <a href="#section4">
              <span class="nav__counter">04</span>
              <h3 class="nav__title">国际交流</h3>
              <p class="nav__body">
                2006年10月27日，法国总统希拉克来到武汉大学，参观了武汉大学中南医院急救中心，并为武大中法肝胆疾病研究院揭幕。
              </p>
            </a>
          </li>

          <li role="presentation" :class="states[4]">
            <a href="#section5">
              <span class="nav__counter">05</span>
              <h3 class="nav__title">珞珈深情</h3>
              <p class="nav__body">
                2011年10月30日，由杰出校友陈东升捐赠亿元，打造的万林艺术博物馆奠基仪式在学校举行。
              </p>
            </a>
          </li>

          <li role="presentation" :class="states[5]">
            <a href="#section6">
              <span class="nav__counter">06</span>
              <h3 class="nav__title">学科建设</h3>
              <p class="nav__body">
                2017年12月28日，教育部学位与研究生教育发展中心公布了全国第四轮学科评估结果。学校51个参评学科中，19个学科排名A类。A类学科数居全国高校第七。
              </p>
            </a>
          </li>
        </ul>
      </nav>

      <div class="sections" ref="sections">
        <section
          class="section section1"
          id="section1"
          style="
            background: url('/source/pagetime/1.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>

        <section
          class="section section2"
          id="section2"
          style="
            background: url('/source/pagetime/2.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>

        <section
          class="section section3"
          id="section3"
          style="
            background: url('/source/pagetime/3.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>

        <section
          class="section section4"
          id="section4"
          style="
            background: url('/source/pagetime/4.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>

        <section
          class="section section5"
          id="section5"
          style="
            background: url('/source/pagetime/5.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>

        <section
          class="section section6"
          id="section6"
          style="
            background: url('/source/pagetime/6.jpg');
            background-size: cover;
            filter: blur(5px) brightness(0.7);
          "
        ></section>
      </div>
      <div>
        <canvas ref="time" class="time"></canvas>
      </div>
    </div>
  </body>
</template>
<script setup>
definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
let worker = null;
let canvas = null;
let offscrean = null;
let instance = getCurrentInstance();

const states = ref(["active", "", "", "", "", ""]);
const time = [1981, 1993, 2000, 2006, 2011, 2017];

onMounted(() => {
  canvas = instance.refs.time;
  canvas.width = 3000;
  canvas.height = 3000;
  offscrean = canvas.transferControlToOffscreen();
  worker = new Worker("/worker/canvas.js");
  worker.postMessage({ canvas: offscrean, nowNum: time[0] }, [offscrean]);
  instance.refs.sections.onscroll = () => {
    let scrollTop = instance.refs.sections.scrollTop || document.body.scrollTop;
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    let index = Math.ceil(scrollTop / windowHeight);
    states.value = ["", "", "", "", "", ""];
    states.value[index] = "active";
    worker.postMessage({ nowNum: time[index] });
  };
});
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  color: #fff;
  position: relative;
  scroll-snap-type: y mandatory;
}

.sections {
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  section {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.time {
  width: auto;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -55%);
  pointer-events: none;
}

section {
  height: 100vh;
  font-size: 40px;
  font-weight: 100;
  background-color: #22a7f0;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  &__wrapper {
    position: fixed;
    height: 100%;
    padding: 30px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    z-index: 1000;
    font-family: "XiaoDouDao";
  }

  & {
    margin: 0 0 100px 30px;
  }

  &__counter {
    font-size: 24px;
    transition: all 0.15s ease-out;
  }

  &__title {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 0.25em;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }

  &__body {
    font-weight: 100;
    font-size: 18px;
    font-size: 18px;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }

  li {
    position: relative;
    transition: all 0.3s ease-out;
    margin-bottom: 1em;

    &:after {
      content: "";
      display: block;
      border-left: 2px solid white;
      border-top: 2px solid white;
      height: 250px;
      width: 20px;
      position: absolute;
      left: -30px;
      top: 15px;
    }

    a {
      display: block;
      padding: 0;
      color: #fff;
      transition: all 0.15s ease-out;

      &:hover {
        background-color: transparent;
        padding-left: 1em;
      }

      &:focus {
        background-color: transparent;
      }
    }

    &.active {
      pointer-events: none;
      padding-left: 1em;

      &:after {
        width: 35px;
        height: 400px;
        top: 35px;
      }

      .nav__counter {
        font-size: 48px;
      }

      .nav__title {
        height: 40px;
        opacity: 1;
        overflow: visible;
      }

      .nav__body {
        height: 100px;
        opacity: 1;
        overflow: visible;
      }
    }
  }
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
</style>
