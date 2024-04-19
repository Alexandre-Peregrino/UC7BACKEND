const Conta = require('./Conta');

let c1 = new Conta('Joel Santos', 0);
c1.depositar(1000);
console.log(c1.getSaldo());
c1.sacar(50);
console.log(c1.getSaldo());
c1.sacar(100);
console.table(c1);

