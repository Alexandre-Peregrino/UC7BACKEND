class Aluno{
    nome;
    matricula;
    disciplina;

    constructor(nome, matricula, disciplina){
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setMatricula(matricula){
        this.matricula = matricula;
    }
    getMatricula(){
        return this.matricula;
    }
    setDisciplina(disciplina){
        this.disciplina.push(disciplina);
    }
    getDisciplina(){
        
        for(let i=0; i<this.disciplina.length; i++){
            console.table(this.disciplina[i]);
        }
    }
    boletim(){
        for(let i=0; i<this.disciplina.length; i++){
            console.log(`${this.disciplina[i].getNome()} : ${this.disciplina[i].situacaoDisciplina()} : ${this.disciplina[i].getNota()}`);
        }
    }
}
module.exports = Aluno;
