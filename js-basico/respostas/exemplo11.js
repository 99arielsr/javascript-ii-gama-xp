//IMC:
// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function imc (height, weight) {
  let calc = weight / (height * height);
  console.log(`O seu IMC é: ${calc.toFixed(1)}`);
}

imc(1.85, 60);