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


const fuzzy = {
  trigNumber: (left, mid, right) => x => {
    if (left <= x && x < mid) return (x - left) / (mid - left);
    if (mid <= x && x < right) return (right - x) / (right - mid);
    return 0;
  },
  or: (a, b) => Math.max(a, b),
  and: (a, b) => Math.min(a, b),
  implication: (cut, func) => x => Math.min(cut, func(x)),

  distance: {
    low: x => fuzzy.trigNumber(0, 0, 100)(x),
    medium: x => fuzzy.trigNumber(50, 150, 200)(x),
    high: x => fuzzy.trigNumber(150, 250, 300)(x)
  },
  force: {
    weak: x => fuzzy.trigNumber(0, 0, 10)(x),
    strong: x => fuzzy.trigNumber(0, 10, 10)(x)
  },
  // Works by integrating the membership function and takes the middle
  defuzz(membershipFunc, from, to, steps) {
    let integralSum = 0;
    let integralSums = [];
    let step = (to - from) / steps;

    for (var xi = from; xi <= to; xi += step) {
      integralSum += membershipFunc(xi);
      integralSums.push({integralSum, xi});
    }

    if (integralSum <= 1e-3) return from;

    while (integralSums[integralSums.length - 1].integralSum >= integralSum / 2) {
      integralSums.pop();
    }

    return integralSums[integralSums.length - 1].xi;
  }
};

function applyForceRule(fromParticles, toParticles, rule, ctx) {
  fromParticles.forEach(fromP => {
    toParticles.forEach(toP => {
      let dist = fromP.position.distance(toP.position);
      let force = rule(dist) / 100;

      if (force > 0) {
        ctx.beginPath();
        ctx.lineWidth = force;
        ctx.strokeStyle = 'white';
        ctx.moveTo(fromP.position.x, fromP.position.y);
        ctx.lineTo(toP.position.x, toP.position.y);
        ctx.stroke();
      }

      force /= 10;

      fromP.velocity = fromP.velocity.add(toP.position.subtract(fromP.position).scale(force));

      if (dist < fromP.size + toP.size) {
        fromP.velocity = fromP.velocity
          .subtract(toP.position.subtract(fromP.position)
            .scale((1 - 1 / (fromP.size + toP.size)) / 5));
      }
    });
  });
}

function smallDistanceStrongAttraction(distance) {
  return fuzzy.defuzz(fuzzy.implication(fuzzy.distance.low(distance), fuzzy.force.strong), 0, 10, 20);
}

function smallOrMediumDistanceWeakAttraction(distance) {
  return fuzzy.defuzz(fuzzy.implication(
    fuzzy.and(fuzzy.distance.low(distance), fuzzy.distance.medium(distance)),
    fuzzy.force.weak
  ), 0, 10, 20);
}

function smallOrMediumDistanceWeakRepulsion(distance) {
  return fuzzy.defuzz(fuzzy.implication(
    fuzzy.or(fuzzy.distance.low(distance), fuzzy.distance.medium(distance)),
    fuzzy.force.weak
  ), 0, 10, 20);
}

function smallDistanceWeakRepulsion(distance) {
  return -smallDistanceWeakAttraction(distance)
}

function smallDistanceWeakAttraction(distance) {
  return fuzzy.defuzz(fuzzy.implication(fuzzy.distance.low(distance), fuzzy.force.weak), 0, 10, 20);
}

function mediumDistanceWeakAttraction(distance) {
  return fuzzy.defuzz(fuzzy.implication(fuzzy.distance.medium(distance), fuzzy.force.weak), 0, 10, 20);
}

function highDistanceWeakRepulsion(distance) {
  return -highDistanceWeakAttraction(distance);
}

function highDistanceWeakAttraction(distance) {
  return fuzzy.defuzz(fuzzy.implication(fuzzy.distance.medium(distance), fuzzy.force.strong), 0, 10, 20);
}


window.onload = () => {
  let canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let ctx = canvas.getContext('2d');
  let [width, height] = [canvas.width, canvas.height];

  let redParticles = Particle.many(50,
    () => Vector.random(new Vector(width / 4, height / 4),
      new Vector(width / 3 * 2, height / 3 * 2)),
    () => Vector.polar(random(1, 200), random(0, 2 * Math.PI)),
    5, 'red',
  );

  let yellowParticles = Particle.many(50,
    () => Vector.random(new Vector(width / 4, height / 4),
      new Vector(width / 3 * 2, height / 3 * 2)),
    () => Vector.polar(random(1, 100), random(0, 2 * Math.PI)),
    5, 'yellow',
  );

  let cyanParticles = Particle.many(50,
    () => Vector.random(new Vector(width / 4, height / 4),
      new Vector(width / 3 * 2, height / 3 * 2)),
    () => Vector.polar(random(1, 100), random(0, 2 * Math.PI)),
    5, 'cyan',
  );

  let animation = () => {
    ctx.clearRect(0, 0, width, height);

    boundWorld(width, height, [...yellowParticles, ...redParticles, ...cyanParticles])

    // attract(redParticles, yellowParticles, -0.0004);
    // attract(redParticles, cyanParticles, 0.0004);

    // attract(cyanParticles, yellowParticles, 0.0002);
    // attract(cyanParticles, redParticles, 0.00005);

    // attract(yellowParticles, cyanParticles, -0.0002);
    // attract(yellowParticles, redParticles, 0.0006);

    // attract(yellowParticles, yellowParticles, 0.002);
    // attract(redParticles, redParticles, 0.002);
    // attract(cyanParticles, cyanParticles, -0.001);

    applyForceRule(cyanParticles, redParticles, smallDistanceWeakRepulsion, ctx);
    applyForceRule(cyanParticles, yellowParticles, mediumDistanceWeakAttraction, ctx);

    applyForceRule(redParticles, yellowParticles, smallDistanceStrongAttraction, ctx);
    applyForceRule(redParticles, cyanParticles, smallDistanceWeakRepulsion, ctx);

    applyForceRule(yellowParticles, cyanParticles, smallDistanceWeakRepulsion, ctx);
    applyForceRule(yellowParticles, cyanParticles, highDistanceWeakAttraction, ctx);

    applyForceRule(redParticles, redParticles, smallOrMediumDistanceWeakAttraction, ctx);
    applyForceRule(cyanParticles, cyanParticles, smallOrMediumDistanceWeakAttraction, ctx);
    applyForceRule(yellowParticles, yellowParticles, smallOrMediumDistanceWeakAttraction, ctx);


    addFriction([...redParticles, ...yellowParticles, ...cyanParticles], 0.82);

    redParticles.forEach(p => p.update());
    yellowParticles.forEach(p => p.update());
    cyanParticles.forEach(p => p.update());

    redParticles.forEach(p => p.render(ctx));
    yellowParticles.forEach(p => p.render(ctx));
    cyanParticles.forEach(p => p.render(ctx));

    window.requestAnimationFrame(animation);
  }

  animation()
}
