function verificarDia(diaSemana){
   
    switch (diaSemana){

        case 'sábado':
        case 'domingo':
            return `Pode descançar!`
            break
        case 'segunda':
        case 'terça':
        case 'quarta':
        case 'quinta':
        case 'sexta':
            return `Pode estudar`
            break
        default:
            return `Entrada inválida` 

}
}
console.log(verificarDia('sábado'))
module.exports = {verificarDia}