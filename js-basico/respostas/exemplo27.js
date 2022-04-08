//Calculadora:
// Vamos criar uma calculadora com as 4 operações matemáticas básicas?
// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console|

function calculadora(operacao, n1, n2) {
  let resultado;
  if (operacao == "soma" || operacao == "somar") {
    resultado = n1 + n2;
    console.log(`${n1} + ${n2} = ${resultado}.`);
  } else if (operacao == "subtraicao" || operacao == "subtrair") {
    resultado = n1 - n2;
    console.log(`${n1} - ${n2} = ${resultado}.`);
  } else if (operacao == "multiplicacao" || operacao == "multiplicar") {
    resultado = n1 * n2;
    console.log(`${n1} * ${n2} = ${resultado}.`);
  } else if (operacao == "divisao" || operacao == "dividir") {
    resultado = n1 / n2;
    console.log(`${n1} / ${n2} = ${resultado}.`);
  } else {
    console.log("Digite uma operação válida.");
  }
}

calculadora("somar", 1, 1);
calculadora("subtrair", 2, 1);
calculadora("multiplicar", 5, 5);
calculadora("dividir", 10, 2);
