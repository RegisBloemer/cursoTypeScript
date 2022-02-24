enum Cores {
  VERMELHO, // 0
  ROXO, // 1
  AZUL, // 2
}

enum Cores {
  PRETO = 'PRETO', // 0
  AMARELO = 400, // 1
  VERDE, // 2
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.PRETO);
