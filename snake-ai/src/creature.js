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
    this.plugins = [];
    this.plug(new Movement);
  }

  steer(angle) {
    this.velocity.rotate(angle);
  }

  get orientation() {
    return this.velocity.angle;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    this.plugins.forEach(plugin =>
      plugin.forEach(part =>
        part.render && part.render(ctx)));
  }

  update() {
    let value = this;
    this.plugins.forEach(plugin =>
      plugin.forEach(part =>
        value = part.call(this, value)));
  }

  plug(...plugin) {
    this.plugins.push(plugin);
  }
}

class Movement {
  call(creature) {
    creature.position.add(creature.velocity);
  }
}
