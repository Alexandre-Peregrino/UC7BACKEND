function calcularIdade(dataNascimento, dataAtual){
    const nascimeto = new Date(dataNascimento);
    const atual = new Date(dataAtual);
    const diff = atual.getTime() - Nascimento.getTime();
    const idade = new Date(diff);
    const anos = idade.getUTCFullYear() - 1970;
    const meses = idade.getUTCMonth();
    const dias = idade.getUTCDate() -1;
    return{anos, meses, dias}
}
console.log(dataNascimento("1977-03-04"), dataAtual(new Date()))