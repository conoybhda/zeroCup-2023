<template>
  <body data-spy="scroll" data-target="#navbar-example">
    <div class="wrapper">
      <nav class="nav__wrapper" id="navbar-example">
        <ul class="nav">

          <li role="presentation" :class="states[0]">
            <a href="#section1">
              <span class="nav__counter">01</span>
              <h3 class="nav__title">武大新貌</h3>
              <p class="nav__body">刘道玉担任武大校长，在校内推行一系列教学和管理体制改革措施，大力开展与世界著名大学合作交流，使武大迎来了文革后的第一个快速发展期。</p>
            </a>
          </li>

          <li role="presentation" :class="states[1]">
            <a href="#section2">
              <span class="nav__counter">02</span>
              <h3 class="nav__title">百年校庆</h3>
              <p class="nav__body">经过考证，武汉大学的校史从1893年成立的湖北自强学堂算起。1993年11月29日，武汉大学举行建校一百周年纪念大会。</p>
            </a>
          </li>

          <li role="presentation" :class="states[2]">
            <a href="#section3">
              <span class="nav__counter">03</span>
              <h3 class="nav__title">四校合并</h3>
              <p class="nav__body">2000年8月2日，武汉大学、武汉水利电力大学、武汉测绘科技大学、湖北医科大学合并组建新的武汉大学。</p>
            </a>
          </li>

          <li role="presentation" :class="states[3]">
            <a href="#section4">
              <span class="nav__counter">04</span>
              <h3 class="nav__title">国际交流</h3>
              <p class="nav__body">2006年10月27日，法国总统希拉克来到武汉大学，参观了武汉大学中南医院急救中心，并为武大中法肝胆疾病研究院揭幕。</p>
            </a>
          </li>

          <li role="presentation" :class="states[4]">
            <a href="#section5">
              <span class="nav__counter">05</span>
              <h3 class="nav__title">珞珈深情</h3>
              <p class="nav__body">2011年10月30日，由杰出校友陈东升捐赠亿元，打造的万林艺术博物馆奠基仪式在学校举行。</p>
            </a>
          </li>

          <li role="presentation" :class="states[5]">
            <a href="#section6">
              <span class="nav__counter">06</span>
              <h3 class="nav__title">学科建设</h3>
              <p class="nav__body">2017年12月28日，教育部学位与研究生教育发展中心公布了全国第四轮学科评估结果。学校51个参评学科中，19个学科排名A类。A类学科数居全国高校第七。</p>
            </a>
          </li>

        </ul>
      </nav>

      <section class="section section1" id="section1">
        Scroll down or use the nav.
      </section>

      <section class="section section2" id="section2">
        Section 2
      </section>

      <section class="section section3" id="section3">
        Section 3
      </section>

      <section class="section section4" id="section4">
        Section 4
      </section>

      <section class="section section5" id="section5">
        Section 5
      </section>

      <section class="section section6" id="section6">
        Section 6
      </section>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      states: ['active', '', '', '', '', '']
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        console.log(scrollTop, windowHeight, scrollHeight);
        let index = Math.floor(scrollTop / windowHeight);
        console.log(index)
        this.states = ['', '', '', '', '', ''];
        this.states[index] = 'active';
      }
    })
  },
}
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  color: #fff;
  position: relative;
}

section {
  height: 100vh;
  font-size: 40px;
  font-weight: 100;
  background-color: #22A7F0;

  display: flex;
  justify-content: center;
  align-items: center;

  $colors: white, #F64747, #22A7F0, #F9690E, #9B59B6, #03C9A9, #ffcc00;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background: nth($colors, $i)
    }
  }
}

.nav {
  &__wrapper {
    position: fixed;
    height: 100%;
    padding: 30px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
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
      content: '';
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
        padding-left: 1em
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
</style>