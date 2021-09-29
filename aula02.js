class Cliente{ // Função e método são termos sinônimos e que nós ajudam a criar um vocabulário mais rico dentro do nosso sistema
    nome;      // Um método pode receber qualquer quantidade de parâmetros.
    cpf;       // Um método define o comportamento ou a maneira de fazer algo.
}

class ContaCorrente {
    agencia;
   // #saldo = 0; // valor inicial de 0
    _saldo = 0 // não é privado de fato mas não deveria estar sendo acessado de fora da classe
    // Atualmente no Js nenhum atributo ou método é realmente privado
    sacar(valor){  // () pq é uma operação/ função
      if(this._saldo >= valor){    // usa-se o this para fins de precisão, usado para se referir ao antecedente no caso a função vinculada
        this.saldo -= valor
        return valor;
      }
    
    }
    
    depositar(valor){
      if(valor <= 0) return;  
      //técnica chamada de early return
      
      this._saldo += valor; 
    }
}

let valorSacado = 200


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
