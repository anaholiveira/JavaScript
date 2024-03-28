import entradaDados from "readline-sync";

//Declaração de função
function caixaAlta(string) {
    return string.toUpperCase();
}

let nome = entradaDados.question('Informe seu nome: ')
console.log(`EU SOU O ${caixaAlta(nome)}`)

//Expressão de função
const toUpperCase = function (string) {return string.toUpperCase()};
console.log(`VOCÊ NÃO É O ${toUpperCase(nome)}`);

//Função de seta
const maiusculas = (string) => string.toUpperCase();
console.log(`ENTENDEU, ${maiusculas(nome)}!?`);

