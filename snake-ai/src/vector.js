export function vec(x, y) {
  return new Vector(x, y);
}

export function polar(angle, magnitude = 1) {
  return new Vector(
    magnitude * Math.cos(angle),
    magnitude * Math.sin(angle)
  );
}


class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }

  rotate(angle) {
    const oldX = this.x;

    this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    this.y = this.y * Math.cos(angle) + oldX * Math.sin(angle);

    return this;
  }

  add({ x, y }) {
    this.x += x;
    this.y += y;

    return this;
  }

  subtract({ x, y }) {
    this.x -= x;
    this.y -= y;

    return this;
  }

  scale(size) {
    this.x *= size;
    this.y *= size;

    return this;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distance(vector) {
    return this.copy()
      .subtract(vector)
      .length();
  }

  scaleTo(size) {
    const len = this.length() || 1;
    this.scale(size / len);

    return this;
  }
}
