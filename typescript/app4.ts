import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

console.log(dao.inserir(concessionaria));

let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('', '');

console.log(dao2.atualizar(pessoa));
