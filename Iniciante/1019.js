// Conversão de Tempo

// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
// Entrada

// O arquivo de entrada contém um valor inteiro N.
// Saída

// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

var input = require('fs').readFileSync('stdin', 'utf-8');

let tempoEmSegundos = +input;

let grandezas = [3600, 60, 1];
let resposta = [];

for (let conversao of grandezas) {
  // console.log(conversao, tempoEmSegundos);
  resposta.push(parseInt(tempoEmSegundos / conversao));
  tempoEmSegundos %= conversao;
  console.log(conversao, tempoEmSegundos);
}
console.log(resposta.join(':'));
