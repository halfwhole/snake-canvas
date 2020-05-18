class Fruit {
    constructor() {
        this.respawn();
    }

    respawn() {
        this.x = Math.floor(Math.random() * rows) * scale;
        this.y = Math.floor(Math.random() * cols) * scale;
    }

    draw() {
        ctx.fillStyle = "#44FFFF";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}
