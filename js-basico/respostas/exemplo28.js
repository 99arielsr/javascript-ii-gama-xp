//Desconto:
// Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

function sale(valor, porcentagemDesconto) {
  let desconto = valor * (porcentagemDesconto / 100);
  let total = valor - desconto;
  console.log(
    `${porcentagemDesconto}% de ${valor} reais = ${desconto} reais.\nO valor de venda com o desconto aplicado é ${total} reais.`
  );
}

sale(200, 5);
