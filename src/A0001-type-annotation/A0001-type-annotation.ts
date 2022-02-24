/* eslint-disable */
// A linha 1 desabilita  eslint neste arquivo

//Para os tipos da linguagem iniciamos o seu nome com letra minuscula, já os tipos que vc criar começamos com letra maiscula.


// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

//Arrays
//Podem ser declarados de 2 formas diferentes
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
export let pessoa: {nome: string, idade:number, adulto?: boolean} = {
  idade:30,
  nome:'Régis Nyland Bloemer',
};

//Funções
function soma(x:number, y:number){
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x+y;


