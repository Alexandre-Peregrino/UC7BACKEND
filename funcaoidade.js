function calcIdade(anoNascimento){

let idade = (new Date().getFullYear()) - anoNascimento
if(idade >= 0 && idade <= 12 )
    return(`criança ${idade} anos`)
else if(idade > 12 && idade <= 18){
    return(`jovem ${idade} anos`)
}else if(idade >18 && idade <=65){
    return(`adulto ${idade} anos`)
}else if(idade >65){
    return(`idoso ${idade} anos`)
}else{
    return('indefenido')
}
}
console.log(calcIdade(2010));