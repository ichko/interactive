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
        let len = this.length();
        this.scale(size / len);
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
        this.tail.push(this);
    }
    
    update() {
        super.update();
        for (let i = 0;i < this.tail.length - 1;i++) {
            this.tail[i].position.add(
                this.tail[i].position[i + 1]
                    .copy()
                    .subtract(this.tail[i].position)
                    .scaleTo(this.velocity.length())
            );
        }
    }
    
    render(ctx) {
        super.render(ctx);
        this.tail.forEach(object => object.render(ctx));
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
