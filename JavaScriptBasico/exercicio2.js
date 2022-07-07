const botao = document.querySelector("button");

// o botão intrisecamente é true, se rodarmos o código abaixo irár dar true
// existe um boolean escondido
// console.log(Boolean(botao))

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possivel adicionar mais");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
