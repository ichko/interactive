function range(size = 0) {
    return Array.from(Array(size).keys());
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
}

function vec(x, y) {
    return new Vector(x, y);
}


class Creature {
    constructor({ position, size, color, velocity = vec() }) {
        this.position = position;
        this.size = size;
        this.color = color;
        this.velocity = velocity;
    }
    
    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    
    update() {
        this.position.add(this.velocity);
    }
}

class Snake extends Creature {
    constructor(config) {
        super(config);
        this.tailSize = 3;
        this.tail = range(this.tailSize).map(() => new Creature(config));
    }
    
    update() {
        super.update();
    }
}


class Engine {
    constructor({ width, height }) {
        this.scene = [];
        this.canvasSize = { width, height };
    }
    
    addToScne(object) {
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



const [ width, height ] = [ window.innerWidth, window.innerHeight ];
const canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');

ctx.scale(1, -1);
ctx.translate(width / 2, -height / 2);


const engine = new Engine({ width, height });
const snake = new Snake({
    size: 5,
    position: vec(10, 10),
    velocity: vec(1, 1)
});

engine.addToScne(snake);

(function animation() {
    engine
        .clear(ctx)
        .update()
        .render(ctx);

    window.requestAnimationFrame(animation);
})();
