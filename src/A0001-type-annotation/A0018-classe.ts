export class Empresa {
  readonly nome: string; // escrever public não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenoem: string,
  ) {}
}

const empresa1 = new Empresa('Station', '98.457.349/9089-11');
const colaborador1 = new Colaborador('Régis', 'Bloemer');
const colaborador2 = new Colaborador('Luan', 'Daniel');
const colaborador3 = new Colaborador('Thays', 'Commin');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);
console.log(empresa1.nome);
empresa1.mostraColaboradores();
