import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0

  set cliente(novoValor){    //set é para atribuir
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente
  }

  get saldo(){
    return this._saldo
  }

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor){  
    if(this._saldo >= valor){   
      this._saldo -= valor
      return valor;
    }
  }
  
  depositar(valor){
    if(valor <= 0) return;  
    this._saldo += valor; 
  }

  transferir(valor, conta){
    
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}

// Usando assessores do tipo set podemos alterar a regra de como um atributo 
// pode ou não ser modificado sem precisar alterar isso em diversos pontos do código

// Usar assessores do tipo set é uma boa prática 
// para garantirmos que a atribuição de propriedades está sempre segura