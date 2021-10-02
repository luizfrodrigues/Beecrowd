var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

soma = A + B;
console.log(`SOMA = ${soma}`);
