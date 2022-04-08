//Fatorial
// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

let result = 1;

function factorial(value) {
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  console.log(`${value}! = ${result}`);
}

factorial(5);
