function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Luiz',
  sobreNome: 'Nyland',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobreNome);
  },
};

semRetorno('Régis', 'Bloemer');

export { pessoa };
