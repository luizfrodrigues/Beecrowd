// O Maior

// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
// Entrada

// O arquivo de entrada contém três valores inteiros.
// Saída

// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

var input = require('fs').readFileSync('stdin', 'utf-8');

let [a, b, c] = input.split(' ').map(item => parseInt(item));

let MAIORAB = (a + b + Math.abs(a - b)) / 2;

let num = MAIORAB;

let maiorNumero = (num + c + Math.abs(num - c)) / 2;

console.log(`${maiorNumero} eh o maior`);
