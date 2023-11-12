# ZeroCup-2023

> 队名：补贴不发已读不回队
> 组长：袁博涵
> 队员：孙奥，罗逸宸，江悦
> 作品题目：百卅武大，巍巍珞珈

## 一、项目介绍

#### 项目背景

“珞珈之山，东湖之水，山高水长，流风甚美”。跨越三个世纪的武汉大学，即将迎来她的 130 周年华诞。一百三十载栉风沐雨、峥嵘岁月，汇聚了无数教育救国、知识报国、科技强国的精彩华章；一百三十载砥砺奋进、勇毅前行，书写了一所大学与民族独立、国家发展、社会进步伟大进程息息相关、紧紧相连的光荣历史。

为庆祝武大建校 130 周年，作为武汉大学的学生，我们在“零杯”网页设计大赛中，选择武大校史作为主题，来表达我们对母校的热爱之情。

#### 功能描述

本项目是基于武大历史的创意网页，以武大建校 130 周年来的丰富历史积淀作为基础，利用前端技术生动地展现了武大的历史沿革、校园风貌、校园文化、校园建筑、校园名人等内容，让人们更加直观地了解武大的历史，感受武大的魅力。

#### 部署地址

正在完善中...

#### 项目结构

```bash
.
|-- README.md
|-- app.vue
|-- assets
|   |-- css
|   |   |-- font.css
|   |   `-- main.css
|   |-- defaut.sass
|   `-- font
|       `-- XiaoDouDao.ttf
|-- components
|   |-- hello.vue
|   |-- people.vue
|   |-- peopleBox.vue
|   |-- photoBox.vue
|   |-- photosBox.vue
|   |-- storyBox.vue
|   `-- storysBox.vue
|-- composables
|   `-- getData.js
|-- layouts
|   `-- default.vue
|-- nuxt.config.ts
|-- package.json
|-- pages
|   |-- conclusion.vue
|   |-- ending.vue
|   |-- index.vue
|   |-- people.vue
|   |-- photos.vue
|   |-- story-[id]
|   |   |-- page1.vue
|   |   |-- page2.vue
|   |   `-- title.vue
|   |-- storys.vue
|   |-- timeline.vue
|   `-- title.vue
|-- pnpm-lock.yaml
|-- public
|   |-- favicon.ico
|   |-- icon
|   |-- img
|   |-- source
|   |   |-- Chapter1
|   |   |-- Chapter2
|   |   |-- Chapter3
|   |   |-- PageIndex
|   |   |-- PageTImeline
|   |   |-- page-ending
|   |   `-- pagetime
|   `-- worker
|       |-- canvas.js
|       `-- rootCanvas.js
|-- server
|   `-- tsconfig.json
|-- tree.exe
`-- tsconfig.json
```

## 二、设计

#### 故事设计

- 主线: 主线以武大 130 年历史为线索，选取自强学堂、西迁乐山、百卅武大三个关键时间节点作为切入角度，讲述武汉大学传承至今的大学精神和弘毅拓新的办学历程。在每个片段中，分别展示了时代背景，发展过程和关键人物，全面地展现了武大的历史沿革。

- 支线: 支线以武大改革开放以来的不断进步为主题，通过时间线展示了武大在教学、科研、社会服务、文化传承等方面的发展历程，展现了武大在新时代的新气象。

#### 创意设计

- 动画效果：主要通过`css`动画，`canvas`动画展示，流畅生动

- 交互设计：主要通过鼠标滚轮，点击，拖拽等交互方式，减少用户交互负担的同时增强用户代入感

- 音效设计：主要通过背景音乐，音效，语音等方式，增强用户体验

- 机制设计：利用本地缓存保存用户的浏览记录，使用户在第一次访问完成后再次访问会获得不一样的体验，也算一种二周目（

#### 美术设计

- 设计工具: `Adobe Photoshop`, `Adobe XD`

- 色彩理念: 以工笔画中国风扁平化的风格为主，既体现历史感又不失现代感

#### 技术特色

- 页面主要内容集中放置，如 story、storys 一类页面的数据全在 `composables`目录下，提供了很强的可扩展性

- 组件提供更多情景、更多内容的渲染方式，具有很强的灵活性和易扩展性

## 三、技术栈

- 包管理器`pnpm`

- 前端框架`nuxt.js`，通过 nuxt 的 ssr 方式优化 seo

- `scss`, `sass`

- `postcss-px-to-viewport-8-plugin`，方便解决多种分辨率适配问题

## 四、使用指南

#### 本地启动项目

```bash

# 安装依赖

pnpm install

# 运行项目

pnpm run dev

# 打包项目

pnpm run build

```

由于时间仓促，作品仍存在一些差强人意的地方，部分动画效果没有精细的修改，敬请见谅。
