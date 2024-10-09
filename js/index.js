const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
// ctx.fillRect(20, 20, 150, 100);

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(40, 100);
ctx.lineTo(70, 100);
ctx.stroke();