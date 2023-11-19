/** @type {CanvasRenderingContext2D} */
let ctx = null;
let width = 0;
let height = 0;
let points = null;
let point = null;
let nowNum = 0;
let nowPoints = [[], [], [], []];
let mouse = { x: 0, y: 0 };
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

const caculate = (tx, ty, x, y) => {
  let len = x * x + y * y;
  let lent = tx * tx + ty * ty;
  let rx = ((x * lent - tx * len) * 2000) / (len * lent);
  let ry = ((y * lent - ty * len) * 2000) / (len * lent);
  if (rx > 50 || rx < -50 || ry > 50 || ry < -50) {
    rx /= 50;
    ry /= 50;
  }
  return {
    x: rx,
    y: ry,
  };
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 4; i++) {
    nowPoints[i].forEach((p) => {
      ctx.drawImage(point, p.x + ((3 - i) * width) / 4, p.y, 8, 8);
      let temp = caculate(
        p.tx - ((3 - i) * width) / 4,
        p.ty,
        mouse.x - p.x - ((3 - i) * width) / 4,
        mouse.y - p.y
      );
      p.x = (p.tx - p.x) / speed + p.x + temp.x;
      p.y = (p.ty - p.y) / speed + p.y + temp.y;
    });
  }
  requestAnimationFrame(draw);
};

onmessage = async (e) => {
  if (e.data.x) {
    mouse.x = e.data.x;
    mouse.y = e.data.y;
  } else if (e.data.canvas) {
    width = e.data.canvas.width;
    height = e.data.canvas.height;
    ctx = e.data.canvas.getContext("2d");

    await init();
    initPoint();
    initNowPoints();
    changeNowPoins(e.data.nowNum);
    draw();
  } else if (e.data.nowNum) {
    changeNowPoins(e.data.nowNum);
  }
};
