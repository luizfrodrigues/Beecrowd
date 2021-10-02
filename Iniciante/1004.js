var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let A = +lines.shift();
let B = +lines.shift();

PROD = A * B;

console.log(`PROD = ${PROD}`);
