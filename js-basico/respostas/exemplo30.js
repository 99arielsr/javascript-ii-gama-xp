//Jantas:
// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function contaJantar(valor) {
  let taxa = valor * 0.1;
  let total = valor + taxa;
  console.log(
    `Valor da taxa (10%) = ${taxa} reais.\nValor do jantar = ${valor} reais.\nValor total = ${total} reais.`
  );
}

contaJantar(300);
