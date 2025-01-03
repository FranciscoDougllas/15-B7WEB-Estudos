"use strict";

var personagem = {
  nome: 'Gandalf',
  classe: 'Mago',
  nivel: 20,
  vida: 100,
  caractersiticas: {
    inteligencia: 100,
    forca: 100,
    agilidade: 100
  }
};
console.log(personagem.nome); // Gandalf

console.log(personagem.classe); // Mago

console.log(personagem.nivel); // 20

console.log(personagem.vida); // 100

console.log(personagem.caractersiticas.inteligencia); // 100