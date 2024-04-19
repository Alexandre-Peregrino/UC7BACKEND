const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

let d1 = new Disciplina('Matemática', '012', 360 );
let a1 = new Aluno('Joel Santos', 20020, d1);
// Retornar todas as informações do aluno;

console.table(a1)

//Retornar somente o nome do aluno;

console.log(a1.getNome());

//Retornar somente o nome do aluno e da disciplina desse aluno;

console.log(`${a1.getNome()} ${a1.getDisciplina().getNome()}`);

//Modifique o nome da disciplina d1;

d1.setNome('Geografia');
console.log(d1.getNome());

//Modifique o nome do aluno a1;

a1.setNome('Alexandre Peregrino');
console.log(a1.getNome());

//Modifique a matricula do aluno a1;

a1.setMatricula('1977');
console.log(a1.getMatricula());

//Apresente os dados do aluno a1;
console.table(a1);