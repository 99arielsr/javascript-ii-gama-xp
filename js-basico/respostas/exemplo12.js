//Par ou Ímpar:
// Crie uma função que determina se um número é par ou impar.

function typeNumber (value) {
  if (value%2 == 0) {
    console.log(`${value} é um número par.`)
  } else if (value%2 == 1) {
    console.log(`${value} é um número impar.`)
  } else {
    console.log('Por favor, digite um número');
  }
}

typeNumber(8);
typeNumber(5);
typeNumber('batata');