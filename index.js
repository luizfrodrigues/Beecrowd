var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let [_idItem1, quantidadeItem1, valorUnitarioItem1] = lines.shift().split(' ');
let [_idItem2, quantidadeItem2, valorUnitarioItem2] = lines.shift().split(' ');

let [valorTotalItem1, valorTotalItem2] = [
  quantidadeItem1 * valorUnitarioItem1,
  quantidadeItem2 * valorUnitarioItem2,
];

valorTotal = (valorTotalItem1 + valorTotalItem2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valorTotal}`);