export class Engine {
  constructor(renderer) {
    this.scene = [];
    this.renderer = renderer;
  }

  addToScene(object) {
    this.scene.push(object);
    return this;
  }

  update() {
    this.scene.forEach(object => object.update && object.update());
    return this;
  }

  render() {
    this.scene.forEach(object =>
      object.render && object.render(this.renderer));
    return this;
  }

  clear() {
    this.renderer.clear();
    return this;
  }
}
