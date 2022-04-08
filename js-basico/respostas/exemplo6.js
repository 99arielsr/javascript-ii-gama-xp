//Desapegada:
// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function valorDesconto(valorProduto, porcentagemDesconto) {
  let valorOferta = valorProduto - (valorProduto * porcentagemDesconto) / 100;
  console.log(`O produto deve ser vendido por ${valorOferta} reais.`);
}

valorDesconto(3000, 25);
