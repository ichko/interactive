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

io.click(window, () => {
    scene.add(new Explosion({
        size: 50,
        position: io.mouse.position,
        magnitude: 50
    }));
});

(function animate() {
    engine.clear().update().render();
    requestAnimationFrame(animate);
})();
