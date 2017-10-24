import { vec } from 'vector';
import { range, argMin, math } from 'utils';


export class Sight {
  constructor({
    fov = Math.PI / 2,
    rayCount = 8,
    strength = 250,
    environment = []
  } = {}) {
    this.strength = strength;
    this.rayAngles = range(rayCount)
      .map(rayId => rayId / (rayCount - 1) * fov - fov / 2);
    this.environment = environment;
  }

  getSightDirections(velocity) {
    return this.rayAngles
      .map(rayAngle => velocity.copy.rotate(rayAngle));
  }

  intersect(ray, element) {
    return math.intersect.lineCircle({
      start: ray.position,
      end: ray.position.copy.add(ray.direction.scaleTo(this.strength))
    }, {
      position: element.position,
      radius: element.size
    });
  }

  call(self) {
    this.rays = [];

    return this.getSightDirections(self.velocity)
      .map(direction => {
        this.rays.push({
          direction: direction.scaleTo(this.strength),
          position: self.position
        });

        const intersections = this.environment
          .map(element => this.intersects({
            position: self.position,
            direction
          }, element))
          .filter(intersection => intersection.valid);

        return intersections[argMin(
          intersections, ({ distance }) => distance
        )];
      });
  }

  render(renderer) {
    this.rays.forEach(ray => renderer.ray(ray));
  }
}

export class OccipitalLobe {
  constructor(architecture) {
    this.architecture = architecture;
  }

  call(self, sight) {
    // return this.feedForward(sight);
    return (Math.random() - 0.4) / 10;
  }
}

export class Navigator {
  call(self, direction) {
    self.steer(direction);
  }
}
