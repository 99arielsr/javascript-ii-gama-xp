//Porcentagem:
// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function sale(valor, porcentagemDesconto) {
  let desconto = valor * (porcentagemDesconto / 100);
  let total = valor - desconto;
  console.log(
    `o valor do desconto é de ${desconto} reais. O valor de venda com o desconto aplicado é ${total} reais.`
  );
}

sale(100, 5);
