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

document.addEventListener("keydown", (e) => {
    if (e.keyCode == "87" && dir != "down") dir = "up";
    if (e.keyCode == "83" && dir != "up") dir = "down";
    if (e.keyCode == "68" && dir != "left") dir = "right";
    if (e.keyCode == "65" && dir != "right") dir = "left";
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

    if(snakeY < 3*box || snakeX < 1*box || snakeY > 17*box || snakeX > 17*box){
        clearInterval(game);
    }
    
    if (dir == "right") snakeX += box;
    if (dir == "left") snakeX -= box;
    if (dir == "up") snakeY -= box;
    if (dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    

    snake.unshift(newHead);
}

let game = setInterval(drawGame, refresh_rate);