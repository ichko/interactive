import { vec } from 'vector';
import { range, argMin } from 'utils';


export class Sight {
  constructor({
    fov = Math.PI / 2,
    rayCount = 16,
    strength = 15,
    environment = []
  } = {}) {
    this.fov = fov;
    this.rayCount = rayCount;
    this.strength = strength;
    this.environment = environment;
  }

  getSightDirections(velocity) {
    return range(this.rayCount)
      .map(rayId => rayId / (this.rayCount - 1) * this.fov - this.fov / 2)
      .map(rayAngle => velocity.copy.rotate(rayAngle));
  }

  intersect(ray, element) {
    const r = element.size;
    const eye = ray.position.copy.add(ray.direction.scaleTo(this.strength));
    const { x: dx, y: dy } = ray.position.subtract(eye);
    const dr = eye.length;
    const det = element.position.x * eye.y - eye.x * element.position.y;
    const disc = r * r * dr * dr - det * det;
    const discRoot = Math.sqrt(disc);

    const x1 = (det * dy + Math.sign(dy) * dx * discRoot) / (dr * dr);
    const x2 = (det * dy - Math.sign(dy) * dx * discRoot) / (dr * dr);

    const y1 = (-det * dx + Math.abs(dy) * discRoot) / (dr * dr);
    const y2 = (-det * dx - Math.abs(dy) * discRoot) / (dr * dr);

    const p1 = vec(x1, y1);
    const p2 = vec(x2, y2);
    const minLenId = argMin([p1, p2], vector => vector.length);
    const minLenP = [p1, p2][minLenId];

    return {
      valid: disc >= 0,
      distance: minLenP.length,
      intersection: minLenP,
      element
    };
  }

  call(self) {
    return this.getSightDirections(self.velocity)
      .map(direction => {
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
  render(ctx) {
    // ctx.fillRect(0,0,50,50);
  }

  call(self, direction) {
    self.steer(direction);
  }
}
