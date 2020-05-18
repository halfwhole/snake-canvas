const TICK_INTERVAL = 100;

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 10;
const rows = canvas.height / scale;
const cols = canvas.width  / scale;

let myVar;

function update(snake, fruit) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let grow = false;
    if (fruit.x == snake.x && fruit.y == snake.y) {
        fruit.respawn();
        grow = true;
    }
    fruit.draw();
    snake.draw();
    const ok = snake.update(grow);
    if (!ok) {
        stopGame();
    }
}

function stopGame() {
    window.clearInterval(myVar);
    ctx.fillStyle = '#E00000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setup() {
    let snake = new Snake();
    let fruit = new Fruit();

    //  Tick update
    myVar = window.setInterval(() => update(snake, fruit), TICK_INTERVAL);

    // Listen to keypress
    window.addEventListener('keydown', (event) => {
        const direction = event.key.replace('Arrow', '');
        snake.changeDirection(direction);
    });
}

// MAIN
setup();
