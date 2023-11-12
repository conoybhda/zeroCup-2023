/** @type {CanvasRenderingContext2D} */
let ctx = null;
let width = 0;
let height = 0;
let points = [[], [], [], [], [], [], [], [], [], []];
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

const init = () => {
  for (let i = 0; i < 10; i++) {
    let t = i.toString();
    let offscrean = new OffscreenCanvas(width / 4, height);
    let ctxo = offscrean.getContext("2d");
    ctxo.fillStyle = "#000";
    ctxo.font = `normal ${height / 3}px sans-serif`;
    let text = ctxo.measureText(t);
    ctxo.fillText(t, (width / 4 - text.width) / 2, height / 2 + height / 6);
    let data = ctxo.getImageData(0, 0, width / 4, height).data;
    for (let x = 0; x < width / 4; x += 10) {
      for (let y = 0; y < height; y += 10) {
        if (data[(x + (y * width) / 4) * 4 + 3] > 0) {
          points[i].push({ x: x, y: y });
        }
      }
    }

    //随机排序
    let m = points[i].length,
      p,
      q;
    while (m) {
      p = Math.floor(Math.random() * m--);
      q = points[i][m];
      points[i][m] = points[i][p];
      points[i][p] = q;
    }
  }
  console.log(points);
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

onmessage = (e) => {
  if (e.data.canvas) {
    width = e.data.canvas.width;
    height = e.data.canvas.height;
    ctx = e.data.canvas.getContext("2d");

    init();
    initPoint();
    initNowPoints();
    changeNowPoins(e.data.nowNum);
    draw();
  } else {
    changeNowPoins(e.data.nowNum);
  }
};
