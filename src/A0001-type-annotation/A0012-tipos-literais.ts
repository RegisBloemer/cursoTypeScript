let X = 10;  // eslint-disable-line
X = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const people = {
  nome: 'Régis' as const,
  sobreNome: 'Miranda' as const,
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Azul'));

//Module mode
export default 1;
