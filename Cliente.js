export class Cliente{   
  nome;      
  _cpf; //privado porque é único
  
  get cpf(){
    return this._cpf;
  }

  constructor(nome, cpf){   //Construtores são utilizados para inicializar os atributos.
    this.nome = nome;
    this._cpf = cpf;
  }
}
//nome de arquivo com maiúscula representa uma classe
// feito para fins de organização de código


