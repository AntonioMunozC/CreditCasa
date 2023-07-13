LottieInteractivity.create({
  player: document.getElementById('bullet'),
  mode:"scroll",
  actions: [
    {
      visibility: [0.1, 0.25],
      type: "loop",
      frames: [0, 80]
    },
    {
      visibility: [0.25, 1],
      type: "stop",
      frames: [40]
  }
  ]
});
LottieInteractivity.create({
  player: document.getElementById('bullet2'),
  mode:"scroll",
  actions: [
    {
      visibility: [0.1, 0.25],
      type: "loop",
      frames: [0, 80]
    },
    {
      visibility: [0.25, 1],
      type: "stop",
      frames: [40]
  }
  ]
});
LottieInteractivity.create({
  player: document.getElementById('bullet3'),
  mode:"scroll",
  actions: [
    {
      visibility: [0.1, 0.25],
      type: "loop",
      frames: [0, 80]
    },
    {
      visibility: [0.25, 1],
      type: "stop",
      frames: [40]
  }
  ]
});
LottieInteractivity.create({
  player: document.getElementById('bullet4'),
  mode:"scroll",
  actions: [
    {
      visibility: [0.1, 0.25],
      type: "loop",
      frames: [0, 80]
    },
    {
      visibility: [0.25, 1],
      type: "stop",
      frames: [40]
  }
  ]
});
LottieInteractivity.create({
  player: document.getElementById('bullet5'),
  mode:"scroll",
  actions: [
    {
      visibility: [0.1, 0.25],
      type: "loop",
      frames: [0, 80]
    },
    {
      visibility: [0.3, 1],
      type: "stop",
      frames: [40]
  }
  ]
});
var animation = lottie.loadAnimation({
    container: document.getElementById('icon1'),
    renderer: 'svg',
    loop: true,
    path: './json/down.json'
  })
var animation = lottie.loadAnimation({
    container: document.getElementById('icon2'),
    renderer: 'svg',
    loop: true,
    path: './json/morph.json'
  })
var animation = lottie.loadAnimation({
    container: document.getElementById('icon3'),
    renderer: 'svg',
    loop: true,
    path: './json/circle.json'
  })
bullet.addEventListener("enterFrame", function (animation) {
if (animation.currentTime > (bullet.totalFrames -79)) {
 
}
});
