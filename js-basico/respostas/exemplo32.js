//Números:
// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function comparador(n1, n2) {
  if(n1 > n2) {
    console.log(`${n1} é maior que ${n2}.`)
  } else if (n1 < n2) {
    console.log(`${n2} é maior que ${n1}.`)
  } else {
    console.log(`Os números são iguais.`)
  }
}

comparador(2,1);
comparador(1,3);
comparador(1,1);