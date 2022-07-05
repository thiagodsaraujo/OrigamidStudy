function logCurso() {
  const nome = "Javascript";
  const horas = "40 horas";
  console.log(nome, horas);
}

logCurso();

// function livro(nome, ano, autor) {
//   const nomeCaps = nome.toUpperCase();
//   const totalAnos = 2022 - ano;
//   const frase = nome + " por " + autor;
//   const output = {
//     nome: nomeCaps,
//     totalAnos,
//     frase,
//   };
//   return output;
// }

// const livroRetorno = livro("O senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(livroRetorno.frase);


// Poderia só retornar o o objeto direto, sem declarar a variavel
function livroMenor(nome, ano, autor){
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + ' por ' + autor,
  };
  return objeto
}

const livroRetornoMenor = livroMenor("O senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetornoMenor);