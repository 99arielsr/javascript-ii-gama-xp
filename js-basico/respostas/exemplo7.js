//Conversor de medidas:
// Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.

function conversorMedida (metro) {
  let resultado = metro * 1000;
  console.log(`${metro} metros equivalem a ${resultado} milímetros.`);
}

conversorMedida(2);