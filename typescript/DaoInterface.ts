export interface DaoInterface<Tipo> {
  nomeTabela: string;
  
  inserir(object: Tipo): boolean;
  atualizar(object: Tipo): boolean;
  remover(id: number): Tipo;
  selecionar(id: number): Tipo;
  selecionarTodos(): [Tipo];
}