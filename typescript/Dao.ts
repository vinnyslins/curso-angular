import { DaoInterface } from './DaoInterface'

export class Dao<Tipo> implements DaoInterface<Tipo> {
  nomeTabela: string = '';
  
  inserir(object: Tipo): boolean {
    // Lógica do insert
    return true;
  }

  atualizar(object: Tipo): boolean {
    // Lógica do update
    return true;
  }

  remover(id: number): Tipo {
    // Lógica do delete
    return Object();
  }

  selecionar(id: number): Tipo {
    // Lógica do select
    return Object();
  }

  selecionarTodos(): [Tipo] {
    // Lógica do select all
    return [Object()];
  }
}