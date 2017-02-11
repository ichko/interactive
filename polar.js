class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
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

    distance(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

}

class Point {

    constructor(position = new Vector(), color = '#f00', size = 3) {
        this.position = position;
        this.color = color;
        this.size = size;
    }

}

class SpringPoint extends Point {

    constructor(target = new Vector(), elasticity = 1e-3, color = '#f00', size = 3) {
        super(target, color, size);
        this.velocity = new Vector();
        this.target = target;
        this.elasticity = elasticity;
    }

    updateVelocity() {
        this.velocity = this.velocity
            .add(this.target
                .subtract(position)
                .scale(this.elasticity));
    }

    updatePosition() {
        this.position = this.position.add(this.velocity);
    }

}

class Physics {

    static update(objects = []) {
        objects.forEach(object => {
            object.updateVelocity();
            object.updatePosition();
        });
    }

}
