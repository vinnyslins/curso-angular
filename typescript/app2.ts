import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

// Criar carros
let carroA = new Carro('Fusion', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Argo', 2);

// Montar lista de carros da concessionaria
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

// Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros());

// Comprar carro
let cliente = new Pessoa('Vinnys', 'Fusion');
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if(carro['modelo'] == cliente.dizerCarroPreferido()) {
    // Comprar carro
    cliente.comprarCarro(carro);
  }
});

console.log(cliente.dizerCarroQueTem());