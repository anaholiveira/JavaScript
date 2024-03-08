import entradaDados from 'readline-sync';

let x = entradaDados.questionFloat("X: ");
let y = entradaDados.questionFloat("Y: ");
console.log(`Total: ${x + y}`)