export class Engine {
  constructor({ width, height }) {
    this.scene = [];
    this.canvasSize = { width, height };
  }

  addToScene(object) {
    this.scene.push(object);
    return this;
  }

  update() {
    this.scene.forEach(object => object.update());
    return this;
  }

  render(ctx) {
    this.scene.forEach(object => object.render(ctx));
    return this;
  }

  clear(ctx) {
    ctx.clearRect(
      -this.canvasSize.width / 2, 
      -this.canvasSize.height / 2,
      this.canvasSize.width,
      this.canvasSize.height
    );

    return this;
  }
}
