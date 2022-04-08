//Tabuada:
// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(value) {
  console.log(`A tabuada de ${value} é:`);
  for (let i = 1; i <= 10; i++) {
    let calc = value * i;
    console.log(`${value} x ${i} = ${calc}.`);
  }
}

tabuada(5);
