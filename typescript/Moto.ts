import Veiculo from './Veiculo';

export default class Moto extends Veiculo {
  constructor(modelo: string) {
    super();
    this.modelo = modelo;
  }

  public acelerar():void {
    this.velocidade += 20;
  }
}