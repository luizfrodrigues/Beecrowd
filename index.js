/* 
caminho para enviar: readFileSync('/dev/stdin', 'utf8')
*/

const evenNumbers = [0, 2, 4, 6, 8, 10];

console.log(evenNumbers.indexOf(8) !== -1);
console.log(evenNumbers.includes(8));

// ambas significam a mesma coisa: que o número 8 existe no array
