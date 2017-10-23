import { vec } from 'vector';
import { Engine } from 'engine';
import { Snake } from 'snake';


const [ width, height ] = [ window.innerWidth, window.innerHeight ];
const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);


const engine = new Engine({ width, height });
const snake = new Snake({
  size: 5,
  color: 'rgba(250, 10, 100, 1)',
  tailSize: 50,
  position: vec(10, 10),
  velocity: vec(1, 1)
});

engine.addToScene(snake);

let frame = 0;
(function animation() {
  frame++;

  snake.position.x = Math.sin(frame / 70) * 500;
  snake.position.y = Math.cos(frame / 20) * 200;

  engine
    .clear(ctx)
    .update()
    .render(ctx);

  window.requestAnimationFrame(animation);
})();
