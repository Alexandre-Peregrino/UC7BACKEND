const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

let d1 = new Disciplina('Matemática', '012', '360' );
let d2 = new Disciplina('Física', '013', '360');
let d3 = new Disciplina('Informática', '014', '20');
let a1 = new Aluno('Joel Santos', 20020, [d1]);
// Retornar todas as informações do aluno;

console.table(a1)

//Retornar somente o nome do aluno;

console.log(a1.getNome());

//Retornar somente o nome do aluno e da disciplina desse aluno;

// console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);

//Modifique o nome da disciplina d1;

d1.setNome('Matemática');
console.log(d1.getNome());

//Modifique o nome do aluno a1;

a1.setNome('Alexandre Peregrino');
console.log(a1.getNome());

//Modifique a matricula do aluno a1;

a1.setMatricula('1977');
console.log(a1.getMatricula());

//Apresente os dados do aluno a1;
console.table(a1);

//atribuir uma nota para o aluno a1

// a1.getDisciplina().setNota(8.0);
console.table(a1);
a1.setDisciplina(d2);
a1.setDisciplina(d3);
a1.getDisciplina();
d1.setNota(10); d1.setNota(5); d1.setNota(8); d1.setNota(5.5);
d2.setNota(5); d2.setNota(6); d2.setNota(8); d2.setNota(7.3);
d3.setNota(2); d3.setNota(3); d3.setNota(7); d3.setNota(6.5);
a1.getDisciplina();
a1.boletim();