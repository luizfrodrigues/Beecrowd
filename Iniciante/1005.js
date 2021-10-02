var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let A = 3.5 * parseFloat(lines.shift()).toFixed(2);
let B = 7.5 * parseFloat(lines.shift()).toFixed(2);

media = ((A + B) / 11).toFixed(5);

console.log(`MEDIA = ${media}`);
