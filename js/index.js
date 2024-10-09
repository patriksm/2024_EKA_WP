const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

//variables
let refresh_rate = 100;
let box = 32;
let dir;
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}
//--------

document.addEventListener("keydown", (e)=>{
    console.log(e.keyCode);
    if (e.keyCode == "38") console.log(54);
});

function drawGame() {
    ctx.drawImage(ground, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.drawImage(foodImg, food.x, food.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    snake.pop();

    if (dir = "right") snakeX += box;
    if (dir = "left") snakeX -= box;
    if (dir = "up") snakeY -= box;
    if (dir = "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(drawGame, refresh_rate);