/* 

A fórmula para calcular a área de uma circunferência é:
area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e
multiplicando por π.
Entrada

A entrada contém um valor de ponto flutuante (dupla precisão), no caso,
a variável raio.

Saída

Apresentar a mensagem "A=" seguido pelo valor da variável area,
conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize
variáveis de dupla precisão (double). Como todos os problemas, não
esqueça de imprimir o fim de linha após o resultado, caso contrário,
você receberá "Presentation Error".


 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

let raio = parseFloat(input);

area = (PI * Math.pow(raio,2)).toFixed(4)

console.log(`A=${area}`)

// var input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split('\r').join('').split('\n');

// let comecaEm = (x) => (w) => w[0].toUpperCase() === x.toUpperCase();
// let line = lines.shift();
// while (line !== '*') {
//   let comecaEmX = comecaEm(line[0]);
//   console.log(line.split(' ').every(comecaEmX) ? 'Y' : 'N');
//   line = lines.shift();
// }
