//Média entre números:
// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let value = (300 * 100) / 60;

let lucro = value * 0.25;

let venda = value + lucro;

console.log(`O valor total da bicicleta é de ${value} reais;`);
console.log(
  `Para obter 25% de lucro (${lucro} reais), deve ser vendida por ${venda} reais.`
);
