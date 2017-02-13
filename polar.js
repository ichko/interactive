class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    reflect() {
        return new Vector(-this.x, -this.y);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    scale(scalar = 1) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    distance(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

}

class IO {

    constructor() {
        this.mouse = new Vector();
        this.bindMouse();
    }

    bindMouse() {
        window.addEventListener('mousemove', ({ x , y }) => {
            this.mouse.x = x;
            this.mouse.y = y;
        });
    }

}

class Point {

    constructor({ position = new Vector(), color = '#f00', size = 3 }) {
        this.position = position;
        this.color = color;
        this.size = size;
    }

}

class SpringPoint extends Point {

    constructor({ target = new Vector(), elasticity = 1e-1, color = '#f00', size = 3, damping = 1e-1 }) {
        super({ position: target, color, size });
        this.velocity = new Vector();
        this.target = target;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let damping = this.velocity.scale(this.damping);
        let force = this.target
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(damping);

        this.velocity = this.velocity.add(force);
    }

    updatePosition() {
        this.position = this.position.add(this.velocity);
    }

    render(ctx) {
        ctx.beginPath();

        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();
    }

}

class Physics {

    update(objects) {
        objects.forEach(object => {
            object.updateVelocity();
            object.updatePosition();
        });
    }

}

class Renderer {

    constructor(ctx, size = { width: 100, height: 100 }) {
        this.ctx = ctx;
        this.size = size;
    }

    render(objects) {
        objects.forEach(object => {
            object.render(this.ctx);
        });
    }

    clear() {
        this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    }

}

class Engine {

    constructor(physics, renderer, objects = []) {
        this.physics = physics;
        this.renderer = renderer;
        this.objects = objects;
    }

    add(...objects) {
        this.objects = this.objects.concat(objects);
    }

    tick() {
        this.physics.update(this.objects);
    }

    render() {
        this.renderer.render(this.objects);
    }

    clear() {
        this.renderer.clear();
    }

}
