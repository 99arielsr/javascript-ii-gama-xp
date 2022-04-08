//Conversor de moeda:
// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function realToDollars(real) {
  let convert = real / 4.75;
  console.log(
    `${real} reais equivalem a aproximadamente ${convert.toFixed(2)} dólares.`
  );
}

realToDollars(10);
