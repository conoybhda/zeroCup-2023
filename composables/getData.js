const storyData = [
  {
    "title-picture": "/source/Chapter1/Warship.png",
    chap: "第一幕",
    title: "自强学堂",
    border: "/source/Chapter1/Border.jpg",
    photos: [
      {
        id: 0,
        imgSrc: "/source/Chapter1/ZongLiYaMen.jpg",
        description:
          "1893年11月29日 ，张之洞向光绪帝上奏《设立自强学堂片》。 他认为“盖闻经国以自强为本”、“自强之道，以教育人才为先”，故取“自强”二字。",
      },
      {
        id: 1,
        imgSrc: "/source/Chapter1/ZongLiYaMen.jpg",
        description: "random image",
      },
      {
        id: 2,
        imgSrc: "/source/Chapter1/ZongLiYaMen.jpg",
        description: "random image",
      },
    ],
    people: [
      {
        id: 0,
        imgSrc: "/source/Chapter1/ZhangZhiDong.png",
        name: "张之洞",
        description:
          "光绪十五年（1889年）七月十二日，人称“洋务殿军”的张之洞调补湖广总督。其间，张之洞在湖北倾全力于近代工业、商业的兴办，筹办湖北织布官局、湖北枪炮厂，开采大冶、鹤峰的铜铁矿，筹建亚洲第一家大型钢铁联合企业——汉阳炼铁厂。新式工商业的发展，急需大批新式的专门人才，张之洞由此萌生了创办新式学堂——湖北自强学堂的构想。",
      },
      {
        id: 1,
        imgSrc: "/source/Chapter1/ZhangZhiDong.png",
        name: "Zhang Zhi Dong",
        description: "test",
      },
      {
        id: 2,
        imgSrc: "/source/Chapter1/ZhangZhiDong.png",
        name: "Zhang Zhi Dong",
        description: "test",
      },
      {
        id: 3,
        imgSrc: "/source/Chapter1/ZhangZhiDong.png",
        name: "Zhang Zhi Dong",
        description: "test",
      },
      {
        id: 4,
        imgSrc: "/source/Chapter1/ZhangZhiDong.png",
        name: "Zhang Zhi Dong",
        description: "test",
      },
    ],
  },
];

export function getData(storyId) {
  return storyData[storyId];
}
