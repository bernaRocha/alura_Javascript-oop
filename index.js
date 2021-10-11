import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

//let valorSacado = 200

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1._cpf = 11122233309;
cliente1.agencia = 1001;
cliente1._saldo = 0;

console.log(cliente1) // Cliente { nome: 'Ricardo', cpf: 11122233309, agencia: 1001, _saldo: 0 }

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2._cpf = 88822233309;

console.log(cliente2) // Cliente { nome: 'Alice', cpf: 88822233309 }
console.table(cliente2)

        // ┌─────────┬─────────────┐
        // │ (index) │   Values    │
        // ├─────────┼─────────────┤
        // │  nome   │   'Alice'   │
        // │   cpf   │ 88822233309 │
        // └─────────┴─────────────┘

const contaCorrenteRicardo = new ContaCorrente() 
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = 'Ricardo' 

console.log(contaCorrenteRicardo) // ContaCorrente { agencia: 1001, cliente: 'Ricardo', _saldo: 0 }

// Ricardo é o cliente1

contaCorrenteRicardo.depositar(100)
console.log(contaCorrenteRicardo) // ContaCorrente { agencia: 1001, cliente: 'Ricardo', _saldo: 100 }

const conta2 = new ContaCorrente()
conta2.cliente = cliente1 // cliente1.nome = "Ricardo";
conta2.agencia = 102;

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2)

console.log('valor:', valor) // valor: 200
console.log(conta2)
        // ContaCorrente {
        //   agencia: 102,
        //   cliente: Cliente {
        //     nome: 'Ricardo',
        //     cpf: 11122233309,
        //     agencia: 1001,
        //     _saldo: 0
        //   },
        //   _saldo: NaN,
        //   cidade: 'São Paulo'
        // }
console.log(contaCorrenteRicardo) // ContaCorrente { agencia: 1001, cliente: 'Ricardo', _saldo: 100 }

console.log(conta2.cliente) // Cliente { nome: 'Ricardo', cpf: 11122233309, agencia: 1001, _saldo: 0 }

const cliente3 = new Cliente('Fulano', 11122233323)

console.log(`Cliente 3`, cliente3) // Cliente 3 Cliente { nome: 'Fulano', _cpf: 11122233323 }

const contaCorrenteBeltrano = new ContaCorrente(103, cliente3)

console.log(ContaCorrente.numeroDeContas) // 3, no momento o new ContaCOrrente foi chamado 3 vezes