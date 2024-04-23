class Disciplina{
    nome;
    codigo;
    ch;
    nota;

    constructor(nome, codigo, ch, nota){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
        this.nota = [];
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setCodigo(codigo){
        this.codigo = codigo;
    }
    getCodigo(){
        return this.codigo;
    }
    setCh(ch){
        this.ch = ch;
    }
    getCh(){
        return this.ch;
    }
    setNota(nota){
        this.nota.push(nota);
    }
    getNota(){
        return this.nota;
    }
    situacaoDisciplina(){
        let aux = 0;
        for(let i=0; i<this.nota.length; i++){
            aux += this.nota[i];
            
        }
        aux= aux/4;
        if(aux>=6){
            return `Aprovado, média: ${aux} `;

        }else{
            return `Reprovado, média: ${aux} `;
        }
    }

}
module.exports = Disciplina;
