//Dia da Semana:
// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-Feira");
      break;
    case 3:
      console.log("Terça-Feira");
      break;
    case 4:
      console.log("Quarta-Feira");
      break;
    case 5:
      console.log("Quinta-Feira");
      break;
    case 6:
      console.log("Sexta-Feira");
      break;
    case 7:
      console.log("Sábado");
      break;
    default:
      console.log("Por favor, digite um número de 1 a 7");
  }
}

diaDaSemana(1);
diaDaSemana(2);
diaDaSemana(3);
diaDaSemana(4);
diaDaSemana(5);
diaDaSemana(6);
diaDaSemana(7);
diaDaSemana(0);
