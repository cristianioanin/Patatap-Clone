var keyData = {
  q: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    }),
    color: '#e6194b'
  },
  w: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    }),
    color: '#3cb44b'
  },
  e: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    }),
    color: '#ffe119'
  },
  r: {
    sound: new Howl({
      src: ['sounds/corona.mp3']
    }),
    color: '#0082c8'
  },
  t: {
    sound: new Howl({
      src: ['sounds/dotted-spiral.mp3']
    }),
    color: '#f58231'
  },
  y: {
    sound: new Howl({
      src: ['sounds/flash-1.mp3']
    }),
    color: '#911eb4'
  },
  u: {
    sound: new Howl({
      src: ['sounds/flash-2.mp3']
    }),
    color: '#46f0f0'
  },
  i: {
    sound: new Howl({
      src: ['sounds/flash-3.mp3']
    }),
    color: '#f032e6'
  },
  o: {
    sound: new Howl({
      src: ['sounds/glimmer.mp3']
    }),
    color: '#d2f53c'
  },
  p: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#fabebe'
  },
  a: {
    sound: new Howl({
      src: ['sounds/pinwheel.mp3']
    }),
    color: '#008080'
  },
  s: {
    sound: new Howl({
      src: ['sounds/piston-1.mp3']
    }),
    color: '#e6beff'
  },
  d: {
    sound: new Howl({
      src: ['sounds/piston-2.mp3']
    }),
    color: '#aa6e28'
  },
  f: {
    sound: new Howl({
      src: ['sounds/prism-1.mp3']
    }),
    color: '#fffac8'
  },
  g: {
    sound: new Howl({
      src: ['sounds/prism-2.mp3']
    }),
    color: '#800000'
  },
  h: {
    sound: new Howl({
      src: ['sounds/prism-3.mp3']
    }),
    color: '#aaffc3'
  },
  j: {
    sound: new Howl({
      src: ['sounds/splits.mp3']
    }),
    color: '#808000'
  },
  k: {
    sound: new Howl({
      src: ['sounds/squiggle.mp3']
    }),
    color: '#ffd8b1'
  },
  l: {
    sound: new Howl({
      src: ['sounds/strike.mp3']
    }),
    color: '#000080'
  },
  z: {
    sound: new Howl({
      src: ['sounds/suspension.mp3']
    }),
    color: '#ff4444'
  },
  x: {
    sound: new Howl({
      src: ['sounds/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['sounds/ufo.mp3']
    }),
    color: '#ff1493'
  },
  v: {
    sound: new Howl({
      src: ['sounds/veil.mp3']
    }),
    color: '#6dc066'
  },
  b: {
    sound: new Howl({
      src: ['sounds/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['sounds/zig-zag.mp3']
    }),
    color: '#f6546a'
  },
  m: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#ffff66'
  }
}

var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]) {
    keyData[event.key].sound.play();

    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var circle = new Path.Circle(point, 300);
    circle.fillColor = keyData[event.key].color;

    circles.push(circle);
  }
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(.91);

    if (circles[i].area < 1) {
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
      console.log(circles);
    }
  };
}