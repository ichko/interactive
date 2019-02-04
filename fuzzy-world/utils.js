function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  get reflected() {
    return new Vector(-this.x, -this.y);
  }

  subtract(vector) {
    return this.add(vector.reflected);
  }

  get normalized() {
    let len = this.length;
    return len == 0 ? new Vector(0, 0) : new Vector(this.x / len, this.y / len);
  }

  scale(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  scaleTo(scalar) {
    return this.normalized.scale(scalar);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distance(to) {
    return this.subtract(to).length;
  }

  static polar(magnitude, angle) {
    return new Vector(
      magnitude * Math.cos(angle),
      magnitude * Math.sin(angle)
    );
  }

  static random(from, to) {
    return new Vector(
      random(from.x, to.x),
      random(from.y, to.y)
    );
  }
}

class Particle {
  constructor(position, velocity, size, color) {
    this.position = position;
    this.color = color;
    this.size = size;
    this.velocity = velocity;
  }

  update() {
    this.position = this.position.add(this.velocity);
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    ctx.fill()

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.2;
    ctx.arc(
      this.position.x, this.position.y,
      this.size, 0, 2 * Math.PI
    );
    ctx.stroke()
  }

  static many(numParticles, positionGetter, velocityGetter, size, color) {
    return Array.from(Array(numParticles).keys()).map(() => new Particle(
      positionGetter(), velocityGetter(), size, color
    ));
  }
}


function boundWorld(width, height, particles) {
  particles.forEach(p => {
    if (p.position.x < 0) {
      p.position.x = 0;
      p.velocity.x = -p.velocity.x;
    }
    if (p.position.x > width) {
      p.position.x = width;
      p.velocity.x = -p.velocity.x;
    }
    if (p.position.y < 0) {
      p.position.y = 0;
      p.velocity.y = -p.velocity.y;
    }
    if (p.position.y > height) {
      p.position.y = height;
      p.velocity.y = -p.velocity.y;
    }
  });
}

function attract(fromParticles, toParticles, attraction) {
  fromParticles.forEach(fromP => {
    toParticles.forEach(toP => {
      let dist = fromP.position.distance(toP.position);
      fromP.velocity = fromP.velocity
        .add(toP.position.subtract(fromP.position).scale(attraction));

      if (dist < fromP.size + toP.size) {
        fromP.velocity = fromP.velocity
          .subtract(toP.position.subtract(fromP.position)
            .scale((1 - 1 / (fromP.size + toP.size)) / 30));
      }
    });
  });
}

function addFriction(particles, friction) {
  particles.forEach(p => {
    p.velocity = p.velocity.scale(friction);
  });
}
