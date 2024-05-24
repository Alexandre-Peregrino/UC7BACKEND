//Tipos básicos de dados

//Exercício

//1)Definir três variáveis e apresentar a maior

const n1 = 5;
const n2 = 5;
const n3 = 4;
if(n1>n2  && n1>n3){
    console.log('n1 é maior')
}else if(n2>n1 && n2>n3){
    console.log('n2 é maior')
}else if(n3>n1 && n3>n2){
    console.log('n3 é maior')
}else if(n1==n2 && n1==n3){
    console.log('Todos são iguais')
}
 

//2) Calcular a idade de alguém a partir do ano e e determinar se a pessoa é: criança, jovem, adulta, idosa.

const ano_nascimento = 2020;

if((2024 - ano_nascimento) >= 65 )
    console.log(`idoso ${2024 - ano_nascimento} anos`)
else if((2024 - ano_nascimento) >= 18 && (2024 - ano_nascimento) < 65 ){
    console.log(`adulto ${2024 - ano_nascimento} anos`)
}else if((2024 - ano_nascimento) < 18 && (2024 - ano_nascimento) >= 12){
    console.log(`jovem ${2024 - ano_nascimento} anos`)
}else if((2024 - ano_nascimento) < 12 && (2024 - ano_nascimento) >=0){
    console.log(`criança ${2024 - ano_nascimento} anos`)
}else{
    console.log('indefenido')
}
 
const comp = 'domingo'

if(comp === 'segunda' || comp ==='terca' || comp ==='quarta' || comp ==='quinta' || comp ==='sexta'){
    console.log('Estudar')
}else if(comp === 'sabado' || comp ==='domingo'){
    console.log('Fim de semana')
}else{
    console.log('Indefinido')
}

//Definir uma variável que leia a hora atual e determine o turno dia ou noite

let tempo = {hora: new Date().getHours(), minutos: new Date().getMinutes()}

if(tempo.hora >= 6 && tempo.hora<18 && tempo.minutos >= 0)
    console.log('Turno diurno')
else if(tempo.hora>= 18 && tempo.minutos >= 0){
    console.log('Turno noturno')
}
console.log(tempo.hora,':', tempo.minutos)