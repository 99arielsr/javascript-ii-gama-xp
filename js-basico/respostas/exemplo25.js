//É par:
// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao(n1, n2) {
  let resultado = n1 / n2;
  if (resultado % 2 == 0) {
    console.log(`${n1}/${n2} = ${resultado}.\nO resultado de sua divisão é par.`);
  } else {
    console.log(`${n1}/${n2} = ${resultado}.\nO resultado de sua divisão é ímpar.`);
  }
}

divisao(10, 2);
