import { polar } from 'vector';
import { range } from 'utils';


export class Sight {
  constructor({
    fov = Math.PI / 2,
    strength = 16,
    environment = []
  } = {}) {
    this.strength = strength;
    this.fov = fov;
    this.environment = environment;
  }

  getSightDirections({ position, orientation }) {
    return range(this.strength)
      .map(rayId => rayId / (this.strength - 1) * this.fov - this.fov / 2)
      .map(rayAngle => polar(orientation.copy().add(rayAngle)));
  }

  intersect({ orientation, position }, element) {
    return {
      valid: true,
      distance: element.position.distance(orientation)
    };
  }

  call(sightContext) {
    return this.environment
      .map(element => this.getSightDirections(sightContext)
        .find(direction => this.intersects({
          direction,
          position: sightContext.position
        }, element)));
  }
}

export class OccipitalLobe {
  constructor(architecture) {
    this.architecture = architecture;
  }

  call(_, sight) {
    // return this.feedForward(sight);
    return 0.01;
  }
}

export class Navigator {
  render(ctx) {
    // ctx.fillRect(0,0,50,50);
  }

  call(self, direction) {
    self.steer(direction);
  }
}
