import { range } from 'utils';
import { vec } from 'vector';

class NeuralNervousSystem {
  constructor() {
    this.senses = [];
    this.actuator = [];
  }

  addSense(sense) {
    this.senses.push(sense);
  }

  addActuator(actuator) {
    this.actuator.push(actuator);
  }
}

class Creature {
  constructor({
    position, size,
    color, velocity = vec()
  }) {
    this.position = position;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.position.add(this.velocity);
  }
}

export class Snake extends Creature {
  constructor(config) {
    super(config);
    this.tailSize = config.tailSize;
    this.tail = range(this.tailSize).map(() => new Creature({
      position: config.position.copy(),
      size: config.size,
      color: config.color
    }));

    this.tail.push(this);
  }

  update() {
    super.update();
    for (let i = this.tail.length - 1;i >= 1;i--) {
      const direction = this.tail[i].position
        .copy()
        .subtract(this.tail[i - 1].position);

      this.tail[i - 1].position.add(direction
        .scaleTo(direction.length() - this.size * 2));
    }
  }

  render(ctx) {
    super.render(ctx);
    for (let i = 0;i < this.tail.length - 1;i++) {
      this.tail[i].render(ctx);
    }
  }
}
