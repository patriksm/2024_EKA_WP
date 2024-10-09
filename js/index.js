const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

//variables
let refresh_rate = 100;
let box = 32;

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let food = {
    x: Math.floor(Math.random()*17+1)*box,
    y: 7*box
}
//--------

console.log("Random Number "+Math.floor(Math.random()*17+1));
console.log(Math.floor(5.78));

function drawGame() {
    ctx.drawImage(ground, 0, 0);

    ctx.fillStyle = "yellow";
    ctx.fillRect(snake[0].x, snake[0].y, box, box);

    ctx.drawImage(foodImg, food.x, food.y);
}

let game = setInterval(drawGame, refresh_rate);