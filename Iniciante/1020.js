// Idade em Dias

// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a
// em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo
// mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12
// meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com
// objetivo de testar raciocínio matemático simples.

// Entrada

// O arquivo de entrada contém um valor inteiro.

// Saída

// Imprima a saída conforme exemplo fornecido.

var input = require('fs').readFileSync('stdin', 'utf-8');

let idadeEmDias = +input;
console.log(`O total de dias é ${idadeEmDias}.`);

const conversao = [365, 30, 1];

let anos = parseInt(idadeEmDias / conversao[0]);
idadeEmDias %= conversao[0];

let meses = parseInt(idadeEmDias / conversao[1]);
idadeEmDias %= conversao[1];

console.log(`${anos} ano(s)
${meses} mes(es)
${idadeEmDias} dia(s)`);
