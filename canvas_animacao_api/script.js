const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let dx = 4;
let dy = 4;
let raio = 30;
let cor = "blue"; 

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x + raio > canvas.width || x - raio < 0) {
        dx = -dx;
        cor = (cor === "blue") ? "red" : "blue";
    }

    if (y + raio > canvas.height || y - raio < 0) {
        dy = -dy;
        cor = (cor === "blue") ? "green" : "blue";
    }

    requestAnimationFrame(desenhar);
}

desenhar();