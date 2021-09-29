class ContaCorrente {
  agencia;
  _saldo = 0
  sacar(valor){  
    if(this._saldo >= valor){   
      this.saldo -= valor
      return valor;
    }
  
  }
  
  depositar(valor){
    if(valor <= 0) return;  
    this._saldo += valor; 
  }
}