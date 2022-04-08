//Maior de idade:
//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function verificadorIdade(nascimentoAno) {
  let anoAtual = 2022;
  let idade = anoAtual - nascimentoAno;
  if(idade >= 18) {
    console.log(`Você tem ${idade} anos, portanto é maior de idade.`);
  } else {
    console.log(`Você tem ${idade} anos, portanto é menor de idade.`);
  }
}

verificadorIdade(1990);
verificadorIdade(2005);