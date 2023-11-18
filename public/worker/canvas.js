/** @type {CanvasRenderingContext2D} */
let ctx = null;
let width = 0;
let height = 0;
let points = null;
let point = null;
let nowNum = 0;
let nowPoints = [[], [], [], []];
const speed = 20;

const initPoint = () => {
  let off = new OffscreenCanvas(8, 8);
  let octx = off.getContext("2d");
  octx.fillStyle = "#fff";
  octx.beginPath();
  octx.arc(4, 4, 4, 0, 2 * Math.PI);
  octx.fill();
  point = off.transferToImageBitmap();
};

const init = async () => {
  return await fetch("/worker/num.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      points = res;
    });
};

const initNowPoints = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < points[0].length; j++) {
      nowPoints[i].push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        tx: points[0][j].x,
        ty: points[0][j].y,
      });
    }
  }
};

const changeNowPoins = (now) => {
  let m = now;
  for (let i = 0; i < 4; i++) {
    let t = now % 10;
    let p = nowNum % 10;
    now = Math.floor(now / 10);
    nowNum = Math.floor(nowNum / 10);
    if (t == p) {
      continue;
    }
    if (points[t].length > nowPoints[i].length) {
      for (let j = 0; j < nowPoints[i].length; j++) {
        nowPoints[i][j].tx = points[t][j].x;
        nowPoints[i][j].ty = points[t][j].y;
      }
      for (let j = nowPoints[i].length; j < points[t].length; j++) {
        let x = Math.floor(Math.random() * nowPoints[i].length);
        nowPoints[i].push({
          x: nowPoints[i][x].x,
          y: nowPoints[i][x].y,
          tx: points[t][j].x,
          ty: points[t][j].y,
        });
      }
    } else {
      let s = Math.floor((nowPoints[i].length - points[t].length) / 2);
      nowPoints[i] = nowPoints[i].slice(s, points[t].length + s);

      for (let j = 0; j < nowPoints[i].length; j++) {
        nowPoints[i][j].tx = points[t][j].x;
        nowPoints[i][j].ty = points[t][j].y;
      }
    }
  }
  nowNum = m;
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 4; i++) {
    nowPoints[i].forEach((p) => {
      ctx.drawImage(point, p.x + ((3 - i) * width) / 4, p.y, 8, 8);
      if (
        (p.tx - p.x > 1 || p.tx - p.x < -1) &&
        (p.ty - p.y > 1 || p.ty - p.y < -1)
      ) {
        p.x = (p.tx - p.x) / speed + p.x + (Math.random() - 0.5) * 2;
        p.y = (p.ty - p.y) / speed + p.y + (Math.random() - 0.5) * 2;
      } else {
        p.x = p.tx;
        p.y = p.ty;
      }
    });
  }
  requestAnimationFrame(draw);
};

onmessage = async (e) => {
  if (e.data.canvas) {
    width = e.data.canvas.width;
    height = e.data.canvas.height;
    ctx = e.data.canvas.getContext("2d");

    await init();
    initPoint();
    initNowPoints();
    changeNowPoins(e.data.nowNum);
    draw();
  } else {
    changeNowPoins(e.data.nowNum);
  }
};
