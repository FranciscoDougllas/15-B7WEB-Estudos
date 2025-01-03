// while enquanto

const readlineSync = require('readline-sync');

let i = parseInt(readlineSync.question('Digite um número: '), 10);

if (isNaN(i)) {
  console.log('Por favor, digite um número válido.');
} else {
  while (i <= 10) {
    console.log('O Número é', i);
    i++;
  }
}