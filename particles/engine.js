let Utils = {
    random: (min = 0, max = 1) => Math.random() * (max - min) + min,
    range: (size, handler) => Array.from(Array(size).keys()).map(handler)
};

class Renderer {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    circle(position, size, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        // this.ctx.strokeStyle = color;
        this.ctx.strokeWidth = 3;
        this.ctx.arc(position.x, position.y, size, 0, 2 * Math.PI);
        // this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }

    clear() {
        this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
    }
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    static polar(angle = 0, length = 1) {
        return new Vector(Math.cos(angle) * length, Math.sin(angle) * length);
    }

    static randomPolar(length = 1, minAngle = 0, maxAngle = Math.PI * 2) {
        return Vector.polar(Utils.random(minAngle, maxAngle), length);
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    scale(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    copy() {
        return new Vector(this.x, this.y);
    }
}

class Particle {
    constructor({
        position = new Vector(),
        velocity = new Vector(),
        damping = 0.99,
        color = '#00f',
        size = 8
    } = {}) {
        this.position = position;
        this.velocity = velocity;
        this.damping = damping;
        this.color = color;
        this.size = size;
    }

    render(renderer) {
        renderer.circle(this.position, this.size, this.color);
    }

    applyForce(force) {
        this.velocity.add(force);
    }

    update(dt) {
        this.position.add(this.velocity.copy().scale(dt));
        this.velocity.scale(this.damping);
    }
}

class Scene {
    constructor() {
        this.container = [];
        this.forces = [];
    }

    recycle() {
        this.container = this.container.filter(object => object.alive());
        return this;
    }

    addForce(...forces) {
        this.forces = this.forces.concat(forces);
        return this;
    }

    add(...objects) {
        this.container = this.container.concat(objects);
        return this;
    }

    render(renderer) {
        this.container.forEach(object => object.render(renderer));
    }

    update(dt) {
        this.container.forEach(object => {
            this.forces.forEach(force => object.applyForce(force));
            object.update(dt)
        });
    }
}

class Engine {
    constructor(renderer, scene) {
        this.renderer = renderer;
        this.scene = scene;
        this.currentTime = Date.now() - 1;
    }

    clear() {
        this.renderer.clear();
        return this;
    }

    render() {
        this.scene.render(this.renderer);
        return this;
    }

    update() {
        let dt = new Date() - this.currentTime;
        this.currentTime = Date.now();
        this.scene.update(dt / 50);
        this.scene.recycle();
        return this;
    }
}

class IO {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.mouse = {
            position: new Vector(),
            down: false
        };
        
        this.bindEvents();
    }
    
    click(element, handler) {
        element.addEventListener('click', handler);
    }

    bindEvents() {
        window.addEventListener('mousemove', ({ x, y }) => {
            this.mouse.position.x = x - this.width / 2;
            this.mouse.position.y = -y + this.height / 2;
        });
    }
}


class Explosion {
    constructor(config) {
        this.particles = [];
        this.config = config;
    }

    fire() {
        this.init(this.config);
        return this;
    }

    init({
        size = 2,
        magnitude = 10,
        color,
        particleSize = 20,
        position = new Vector(),
        fromAngle = 0,
        toAngle = Math.PI * 2
    } = {}) {
        this.particles = this.particles.concat(Utils.range(size, () => new Particle({
            color,
            position: position.copy(),
            size: particleSize,
            velocity: Vector.randomPolar(1, fromAngle, toAngle)
                .scale(Utils.random(magnitude / 2, magnitude))
        })));
    }

    recycle() {
        this.particles = this.particles.filter(particle => particle.size > 0.5);
    }

    alive() {
        return this.particles.length > 0;
    }

    render(renderer) {
        this.particles.forEach(particle => particle.render(renderer));
    }

    applyForce(force) {
        this.particles.forEach(particle => particle.applyForce(force));
    }

    update(dt) {
        this.particles.forEach(particle => {
            particle.size /= Utils.random(1.02, 1.05);
            particle.update(dt)
        });
        this.recycle();
    }
}

class Fountain extends Explosion {
    constructor(config) {
        super(config);
    }

    update(dt) {
        this.fire();
        super.update(dt);
    }
}
