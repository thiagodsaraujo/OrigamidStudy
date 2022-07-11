const lista = ['JavaScript', 'HTML', 'CSS'] ;
// console.log(lista);

// const js = lista[0];
// const html = lista[1];
// const css = lista[2];

// primeiro o indice, depois a 2 condição, a terceira condição é o que vai ocorrer toda vez que o loop for ativado 
for (let index = 0 ; index <= 100; index++) {
  console.log("teste" + index);
} 

const body = document.querySelector('body');

// iteração com lista
for (let index = 0 ; index <= lista.length; index++) {
  console.log(lista[index++]);
  body.innerHTML += '<li>' + lista[index++] + '</li>'
} 

// FOR EARCH - MAIS FACIL DE LEITURA

function logarItems(item, index) {
  console.log(item, 'no index:', index);
}

lista.forEach(logarItems);

// você pode escrever a função no argumento:
lista.forEach(function (item, index) {
  console.log(item, 'no index:', index);
});

function adicionarBody(item){
  body.innerHTML += "<li>" + item + "</li>"
}

lista.forEach(adicionarBody);