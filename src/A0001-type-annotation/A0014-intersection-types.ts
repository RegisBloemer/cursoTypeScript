type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobreNome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
// type Intersection = AB & AC;

const pessoa: Pessoa = {
  nome: 'Régis',
  sobrenome: 'Bloemer',
  idade: 10,
};

console.log(pessoa);

// Module mode
export { pessoa };
