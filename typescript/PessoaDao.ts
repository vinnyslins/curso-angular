import { DaoInterface } from './DaoInterface';
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface {
  nomeTabela: string = 'tb_pessoa';
  
  inserir(object: Pessoa): boolean {
    // Lógica do insert
    return true;
  }

  atualizar(object: Pessoa): boolean {
    // Lógica do update
    return true;
  }

  remover(id: number): Pessoa {
    // Lógica do delete
    return new Pessoa('', '');
  }

  selecionar(id: number): Pessoa {
    // Lógica do select
    return new Pessoa('', '');
  }

  selecionarTodos(): [Pessoa] {
    // Lógica do select all
    return [new Pessoa('', '')];
  }
}