//Unknown é um any mais seguro
let x: unknown;

x = 100;
x = 'Régis';
x = 900;
x = '10';
x = 'Régis';
const y = 800;

if (typeof x === 'number') console.log(x + y);
