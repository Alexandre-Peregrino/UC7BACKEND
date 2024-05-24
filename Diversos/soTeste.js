function idadeCompleta(ano, mes, dia){
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() +1;
    const diaAtual = new Date().getDate();
    let idadeAno = anoAtual - ano;
    let idadeMes = mesAtual - mes;
    let idadeDia = diaAtual - dia;

    if(idadeMes<0 && idadeDia<0){
        idadeAno++;
    }
    if(idadeMes < 0){
        idadeAno--;
        idadeMes = idadeMes * (-1);
        idadeMes = 12 - idadeMes;
    }
    if(idadeDia < 0 ){
        idadeAno--;
        idadeDia = idadeDia * (-1)
    }
    if(idadeAno<0){
        console.log("Digite ano menor ou igual ao ano atual");
        return
    }
    if(mes>12){
        console.log("Digite um valor menor ou igual 12")
        return
    }
    
   return `${idadeAno} anos ${idadeMes} meses ${idadeDia} dias`;
}
console.log(idadeCompleta(2020, 6, 6))
