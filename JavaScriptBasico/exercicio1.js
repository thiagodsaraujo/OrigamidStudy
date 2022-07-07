const circulo = document.querySelector("#circulo");
// mais otimizado colocar a variavel fora da função para processamento
function seguirMouse(event) {
  // const x = event.x;
  // const y = event.y;
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
