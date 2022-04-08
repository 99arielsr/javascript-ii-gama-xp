//Imprima na tela os números pares existentes entre 0 e 100.

//Solução 1:
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Solução 2:
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
