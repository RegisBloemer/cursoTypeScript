const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  // chaveC?: string; // chave opcional
  // [key: string]: unknown; // chave desconhecida que pode ser criada
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outra string';

console.log(objetoA);
