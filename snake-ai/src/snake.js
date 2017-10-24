import { range } from 'utils';
import { Creature } from 'creature';

export class Food extends Creature {

}

export class Snake extends Creature {
  constructor(config) {
    super(config);
    this.tailSize = config.tailSize;
    this.tail = range(this.tailSize).map(id => new Creature({
      position: config.position.copy,
      size: config.size,
      color: config.color
    }));

    this.tail.push(this);
  }

  update() {
    super.update();
    for (let i = this.tail.length - 1;i >= 1;i--) {
      const direction = this.tail[i].position
        .copy.subtract(this.tail[i - 1].position);

      this.tail[i - 1].position.add(direction
        .scaleTo(direction.length - this.size * 2));
    }
  }

  render(renderer) {
    super.render(renderer);
    for (let i = 0;i < this.tail.length - 1;i++) {
      this.tail[i].render(renderer);
    }
  }
}
