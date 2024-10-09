const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

//variables
let refresh_rate = 100;
let box = 32;

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}
//--------

function drawGame() {
    ctx.drawImage(ground, 0, 0);

    ctx.fillStyle = "yellow";
    ctx.fillRect(snake[0].x, snake[0].y, box, box);
}

let game = setInterval(drawGame, refresh_rate);