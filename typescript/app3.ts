import Carro from './Carro';
import Moto from './Moto';
import Concessionaria from './Concessionaria';

let carro = new Carro('Fusion', 4);
let moto = new Moto('150');
moto.acelerar();
moto.acelerar();
carro.acelerar();

console.log(moto);
console.log(carro);

let concessionaria = new Concessionaria('', []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
