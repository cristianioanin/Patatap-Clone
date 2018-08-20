var keyData = {
  q: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    }),
    color: '#ff7373'
  },
  w: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    }),
    color: '#40e0d0'
  },
  e: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    }),
    color: '#ffd700'
  },
  r: {
    sound: new Howl({
      src: ['sounds/corona.mp3']
    }),
    color: '#ffc0cb'
  },
  t: {
    sound: new Howl({
      src: ['sounds/dotted-spiral.mp3']
    }),
    color: '#008080'
  },
  y: {
    sound: new Howl({
      src: ['sounds/flash-1.mp3']
    }),
    color: '#800080'
  },
  u: {
    sound: new Howl({
      src: ['sounds/flash-2.mp3']
    }),
    color: '#7fffd4'
  },
  i: {
    sound: new Howl({
      src: ['sounds/flash-3.mp3']
    }),
    color: '#003366'
  },
  o: {
    sound: new Howl({
      src: ['sounds/glimmer.mp3']
    }),
    color: '#20b2aa'
  },
  p: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    }),
    color: '#fff68f'
  },
  a: {
    sound: new Howl({
      src: ['sounds/pinwheel.mp3']
    }),
    color: '#468499'
  },
  s: {
    sound: new Howl({
      src: ['sounds/piston-1.mp3']
    }),
    color: '#c39797'
  },
  d: {
    sound: new Howl({
      src: ['sounds/piston-2.mp3']
    }),
    color: '#8b0000'
  },
  f: {
    sound: new Howl({
      src: ['sounds/prism-1.mp3']
    }),
    color: '#088da5'
  },
  g: {
    sound: new Howl({
      src: ['sounds/prism-2.mp3']
    }),
    color: '#ff7f50'
  },
  h: {
    sound: new Howl({
      src: ['sounds/prism-3.mp3']
    }),
    color: '#8a2be2'
  },
  j: {
    sound: new Howl({
      src: ['sounds/splits.mp3']
    }),
    color: '#b6fcd5'
  },
  k: {
    sound: new Howl({
      src: ['sounds/squiggle.mp3']
    }),
    color: '#3399ff'
  },
  l: {
    sound: new Howl({
      src: ['sounds/strike.mp3']
    }),
    color: '#3b5998'
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
  };
}