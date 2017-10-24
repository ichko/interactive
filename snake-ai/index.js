import { vec } from 'vector';
import { range, random, randomPosition } from 'utils';
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

function aiSnake(size, position) {
  return new Snake({
    size, color: 'rgba(250, 10, 100, 1)',
    tailSize: 50, position, velocity: vec(0, 1)
  })
  .plug(new Sight(), new OccipitalLobe(), new Navigator());
}

const renderer = new CanvasRenderer(ctx, { width, height });
const engine = new Engine(renderer);

range(10).forEach(() => engine.addToScene(
  aiSnake(random(0, 15), randomPosition(800))
));

(function animation() {
  engine
    .clear()
    .update()
    .render();

  window.requestAnimationFrame(animation);
})();
