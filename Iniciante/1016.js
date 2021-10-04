// Distância

// Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

// Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

// Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.
// Entrada

// O arquivo de entrada contém um número inteiro.
// Saída

// Imprima o tempo necessário seguido da mensagem "minutos".

/*
  60 km - 30 km -> diferença entre as distancias percorridas em uma hora,
  ou seja, a cada hora tenho 30km de diferença entre os carros
  x min - input
  x = (60 * input)/ 30 => x = 2 * input; 
*/

var input = require('fs').readFileSync('stdin', 'utf-8');
let tempo = 2 * input;

console.log(`${tempo} minutos`);
