import { vec } from 'vector';

export class Creature {
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