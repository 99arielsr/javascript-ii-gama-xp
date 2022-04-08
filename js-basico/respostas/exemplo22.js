//conta bancária:
//Vamos criar uma conta bancária com as 3 operações básicas?
//a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual|

function contaBancaria(operacao, value) {
  let saldo = 100;

  if (operacao == 'depositar') {
    saldo += value;
    console.log(`O saldo atual é de ${saldo} reais.`);
  } else if (operacao == 'sacar' && saldo >= value) {
    saldo -= value;
    console.log(`O saldo atual é de ${saldo} reais.`);
  } else if (operacao == 'consultar saldo') {
    console.log(`O saldo atual é de ${saldo} reais.`);
  }
}

contaBancaria('depositar', 300); // 100 + 300 = 400;
contaBancaria('sacar', 50); // 100 - 50 = 50;
contaBancaria('consultar saldo');  // saldo = 100.