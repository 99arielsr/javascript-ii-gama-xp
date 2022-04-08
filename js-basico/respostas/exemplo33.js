//Ímpar/Par:
//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

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
typeNumber('avião');