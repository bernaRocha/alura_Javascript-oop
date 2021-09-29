class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente() 
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo)

contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo)

let valorSacado = 200
contaCorrenteRicardo.saldo -= valorSacado
console.log(contaCorrenteRicardo.saldo)
