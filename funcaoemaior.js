function ehMaior(n1, n2, n3){

if(n1>n2  && n1>n3){
    return('n1 é maior')
}else if(n2>n1 && n2>n3){
    return('n2 é maior')
}else if(n3>n1 && n3>n2){
    return('n3 é maior')
}else if(n1==n2 && n1==n3){
    return('Todos são iguais')
}
}
console.log(ehMaior(2,4,7))