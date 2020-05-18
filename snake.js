class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.tail = []; // Earliest at front, most recent at back
        this.changeDirection('Right');
    }

    draw() {
        ctx.fillStyle = "#FFFFFF";
        for (const tailie of this.tail) {
            ctx.fillRect(tailie[0], tailie[1], scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    // Returns true if there is no collision
    update(grow = false) {
        this.tail.push([this.x, this.y]);
        if (!grow) {
            this.tail.shift();
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Wraparound
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width - scale;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height - scale;
        }

        //  Check for collisions
        for (const tailie of this.tail) {
            if (this.x == tailie[0] && this.y == tailie[1]) {
                // Collision!
                return false;
            }
        }
        return true;
    }

    changeDirection(direction) {
        switch (direction) {
        case 'Up':
            this.xSpeed = 0;
            this.ySpeed = -scale;
            break;
        case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale;
            break;
        case 'Left':
            this.xSpeed = -scale;
            this.ySpeed = 0;
            break;
        case 'Right':
            this.xSpeed = scale;
            this.ySpeed = 0;
            break;
        default:
            break;
        }
    }
}
