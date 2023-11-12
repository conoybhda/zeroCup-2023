/** @type {CanvasRenderingContext2D} */
let ctx = null;
let width = 0;
let height = 0;
let point = null;
let nowPoints = [];
const speed = 10;

const initPoint = () => {
  let off = new OffscreenCanvas(8, 8);
  let octx = off.getContext("2d");
  octx.fillStyle = "#000";
  octx.beginPath();
  octx.arc(4, 4, 4, 0, 2 * Math.PI);
  octx.fill();
  point = off.transferToImageBitmap();
};

const changeNowPoins = (str) => {
  let temp = [];
  let offscrean = new OffscreenCanvas(width, height);
  let ctxo = offscrean.getContext("2d");
  ctxo.fillStyle = "#000";
  ctxo.font = `normal ${height / 3}px sans-serif`;
  let text = ctxo.measureText(str);
  ctxo.fillText(str, 100, (height * 2) / 3);
  let data = ctxo.getImageData(0, 0, width, height).data;
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      if (data[(i + j * width) * 4 + 3] > 0) {
        temp.push({ x: i, y: j });
      }
    }
  }

  //随机排序
  let m = temp.length,
    p,
    q;
  while (m) {
    p = Math.floor(Math.random() * m--);
    q = temp[m];
    temp[m] = temp[p];
    temp[p] = q;
  }

  //更改nowPoints
  if (nowPoints.length > temp.length) {
    let n = Math.floor((nowPoints.length - temp.length) / 2);
    nowPoints = nowPoints.slice(n, temp.length + n);
  } else {
    for (let i = nowPoints.length; i < temp.length; i++) {
      let m = Math.floor(Math.random() * nowPoints.length);
      nowPoints.push({
        x: nowPoints[m].x,
        y: nowPoints[m].y,
        tx: temp[i].x,
        ty: temp[i].y,
      });
    }
  }
  for (let i = 0; i < temp.length; i++) {
    nowPoints[i].tx = temp[i].x;
    nowPoints[i].ty = temp[i].y;
  }
};

const init = (str) => {
  let temp = [];
  let offscrean = new OffscreenCanvas(width, height);
  let ctxo = offscrean.getContext("2d");
  ctxo.fillStyle = "#000";
  ctxo.font = `normal ${height / 3}px sans-serif`;
  let text = ctxo.measureText(str);
  ctxo.fillText(str, 100, (height * 2) / 3);
  let data = ctxo.getImageData(0, 0, width, height).data;
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      if (data[(i + j * width) * 4 + 3] > 0) {
        temp.push({ x: i, y: j });
      }
    }
  }

  //随机排序
  let m = temp.length,
    p,
    q;
  while (m) {
    p = Math.floor(Math.random() * m--);
    q = temp[m];
    temp[m] = temp[p];
    temp[p] = q;
  }

  //初始化nowPoints
  for (let i = 0; i < temp.length; i++) {
    nowPoints.push({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      tx: temp[i].x,
      ty: temp[i].y,
    });
  }
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);
  nowPoints.forEach((p) => {
    ctx.drawImage(point, p.x, p.y, 8, 8);
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

  requestAnimationFrame(draw);
};

onmessage = (e) => {
  if (e.data.canvas) {
    width = e.data.canvas.width;
    height = e.data.canvas.height;
    ctx = e.data.canvas.getContext("2d");

    init(e.data.nowNum);
    initPoint();
    draw();
  } else {
    changeNowPoins(e.data.nowNum);
  }
};
