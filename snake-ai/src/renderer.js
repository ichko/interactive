import { vec } from 'vector';


export class CanvasRenderer {
  constructor(ctx, { width = 50, height = 50 } = {}) {
    this.ctx = ctx;
    this.canvasSize = { width, height };
  }

  circle({ x = 0, y = 0, radius = 5 } = {}, { color = 'red' } = {}) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }

  clear() {
    this.ctx.clearRect(
      -this.canvasSize.width / 2,
      -this.canvasSize.height / 2,
      this.canvasSize.width,
      this.canvasSize.height
    );
  }

  ray({
    position = vec(),
    direction = vec()
  } = {}, { color } = {}) {
    const lineEnd = position.copy.add(direction);

    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(position.x, position.y);
    this.ctx.lineTo(lineEnd.x, lineEnd.y);
    this.ctx.stroke();
  }
}