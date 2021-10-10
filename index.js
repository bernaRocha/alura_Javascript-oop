import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

//let valorSacado = 200

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1._saldo = 0;

console.log(cliente1) // Cliente { nome: 'Ricardo', cpf: 11122233309, agencia: 1001, _saldo: 0 }

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

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






