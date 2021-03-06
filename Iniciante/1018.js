// Cédulas

// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis
// (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
// 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
// necessárias.

// Entrada

// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída

// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo
// necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de
// linha após cada linha, caso contrário seu programa apresentará a mensagem:
// “Presentation Error”.

var input = require('fs').readFileSync('stdin', 'utf-8');

let grana = +input;

const cedulas = [100, 50, 20, 10, 5, 2, 1];

// for (let notas of cedulas) {
//   let quantidadeDeNotas = parseInt(grana / notas);
//   let notaOuNotas;
//   quantidadeDeNotas == 1 ? (notaOuNotas = 'nota') : (notaOuNotas = 'notas');
//   quantidadeDeNotas != 0
//     ? console.log(`${quantidadeDeNotas} ${notaOuNotas} de R$${notas},00`)
//     : '';
//   grana %= notas;
// }

// cedulas.forEach((notas) => {
//   let quantidadeDeNotas = parseInt(grana / notas);
//   let notaOuNotas;
//   quantidadeDeNotas == 1 ? (notaOuNotas = 'nota') : (notaOuNotas = 'notas');
//   quantidadeDeNotas != 0
//     ? console.log(`${quantidadeDeNotas} ${notaOuNotas} de R$${notas},00`)
//     : '';
//   grana %= notas;
// });

// var input = require('fs').readFileSync('stdin', 'utf-8');

// let grana = +input;

// const cedulas = [100, 50, 20, 10, 5, 2, 1];

// console.log(grana);

// for (let notas of cedulas) {
//   let quantidadeDeNotas = parseInt(grana / notas);
//   console.log(`${quantidadeDeNotas} nota(s) de R$ ${notas},00`);
//   grana %= notas;
// }

cedulas.forEach((notas) => {
  let quantidadeDeNotas = parseInt(grana / notas);
  console.log(`${quantidadeDeNotas} nota(s) de R$ ${notas},00`);
  grana %= notas;
});
