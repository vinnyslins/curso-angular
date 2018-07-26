import { DaoInterface } from './DaoInterface';
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {
  nomeTabela: string = 'tb_concessionaria';
  
  inserir(object: Concessionaria): boolean {
    // Lógica do insert
    return true;
  }

  atualizar(object: Concessionaria): boolean {
    // Lógica do update
    return true;
  }

  remover(id: number): Concessionaria {
    // Lógica do delete
    return new Concessionaria('', []);
  }

  selecionar(id: number): Concessionaria {
    // Lógica do select
    return new Concessionaria('', []);
  }

  selecionarTodos(): [Concessionaria] {
    // Lógica do select all
    return [new Concessionaria('', [])];
  }
}