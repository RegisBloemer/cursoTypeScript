//type alias
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = corRGB | CorCMYK;

//Código utilizando os tipos
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000, //200.000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'Azul'));
