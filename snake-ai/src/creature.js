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
    this.plug(new Movement());
  }

  steer(angle) {
    this.velocity.rotate(angle);
  }

  render(renderer) {
    renderer.circle({
      x: this.position.x,
      y: this.position.y,
      radius: this.size
    }, { color: this.color });

    this.plugins.forEach(plugin =>
      plugin.forEach(part =>
        part.render && part.render(renderer)));
  }

  update() {
    let value = this;
    this.plugins.forEach(plugin =>
      plugin.forEach(part =>
        value = part.call(this, value)));
  }

  plug(...plugin) {
    this.plugins.push(plugin);
    return this;
  }
}

class Movement {
  call(self) {
    self.position.add(self.velocity);
  }
}
