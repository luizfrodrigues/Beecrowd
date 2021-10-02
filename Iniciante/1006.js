var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let A = 0.2 * parseFloat(lines.shift());
let B = 0.3 * parseFloat(lines.shift());
let C = 0.5 * parseFloat(lines.shift());

media = (A + B + C).toFixed(1);

console.log(`MEDIA = ${media}`);
