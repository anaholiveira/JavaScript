import entradaDados from "readline-sync";


function somar(num1, num2) {
    return (num1 + num2);
}

let num1 = entradaDados.questionFloat('Digite o primeiro numero: ');
let num2 = entradaDados.questionFloat('Digite o segundo numero: ');

somar(num1, num2)
console.log(`${num1} + ${num2} = ${somar(num1, num2)}`);
