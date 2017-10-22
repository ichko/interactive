export function vec(x, y) {
  return new Vector(x, y);
}

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
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

  scaleTo(size) {
    let len = this.length() || 1;
    this.scale(size / len);

    return this;
  }
}
