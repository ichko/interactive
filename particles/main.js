let [ ctx, width, height ] = (() => {
    let canvas = document.getElementById('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let ctx = canvas.getContext('2d');
    ctx.translate(innerWidth / 2, innerHeight / 2);
    ctx.scale(1, -1);
    
    return [ ctx, innerWidth, innerHeight ];
})();

let io = new IO(width, height);
let renderer = new Renderer(ctx, width, height);
let scene = new Scene().addForce(new Vector(0, -1.5));
let engine = new Engine(renderer, scene);


let leftFountainConfig = {
    size: 4,
    position: new Vector(-width / 2, height / 2 - 100),
    magnitude: 50,
    particleSize: 5,
    fromAngle: Math.PI / 4,
    toAngle: 0,
    color: '#6cf'
};

let rightFountainConfig = JSON.parse(JSON.stringify(leftFountainConfig));
rightFountainConfig.position = new Vector(width / 2, height / 2 - 100);
rightFountainConfig.fromAngle = Math.PI;
rightFountainConfig.toAngle = Math.PI / 4 * 3;

scene
    .add(new Fountain(leftFountainConfig))
    .add(new Fountain(rightFountainConfig));

io.click(window, () => {
    scene.add(new Explosion({
        size: 50,
        position: io.mouse.position.copy(),
        magnitude: 50,
        particleSize: 8,
        color: '#f39'
    }).fire());
});

(function animate() {
    engine.clear().update().render();
    requestAnimationFrame(animate);
})();
