import entradaDados from 'readline-sync';

let numAlunos = entradaDados.questionInt("Digite a quantidade de alunos da sala: ")
let cont = 1;
let notaTotal = 0;

while (cont <= numAlunos) {
    let nota1 = entradaDados.questionFloat(`Nota do primeiro bimestre: `)
    let nota2 = entradaDados.questionFloat(`Nota do segundo bimestre: `)
    let nota3 = entradaDados.questionFloat(`Nota do terceiro bimestre: `)
    let nota4 = entradaDados.questionFloat(`Nota do quarto bimestre: `)
    let notaAluno = (nota1 + nota2 + nota3 + nota4)/4;
    console.log(`A média desse aluno é: ${notaAluno}`);
    notaTotal += notaAluno;
    cont ++
    break

}

let media = notaTotal/numAlunos;
console.log(`Média da sala: ${media}`)