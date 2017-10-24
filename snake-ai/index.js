import { vec } from 'vector';
import { Engine } from 'engine';
import { CanvasRenderer } from 'renderer';
import { Snake } from 'snake';
import { Sight, OccipitalLobe, Navigator } from 'nervous-system';


const [ width, height ] = [ window.innerWidth, window.innerHeight ];
const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);


const renderer = new CanvasRenderer(ctx, { width, height });
const engine = new Engine(renderer);
const snake = new Snake({
    size: 5,
    color: 'rgba(250, 10, 100, 1)',
    tailSize: 50,
    position: vec(10, 10),
    velocity: vec(1, 1)
  })
  .plug(
    new Sight(),
    new OccipitalLobe(),
    new Navigator()
  );

engine.addToScene(snake);

(function animation() {
  engine
    .clear(ctx)
    .update()
    .render(ctx);

  window.requestAnimationFrame(animation);
})();
