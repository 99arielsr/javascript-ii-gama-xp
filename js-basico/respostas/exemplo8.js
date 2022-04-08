//Semaforo, sinal ou sinaleira?
// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo() {
  let verde = 0;
  let verdeTempo = 5;

  while (verdeTempo > verde) {
    console.log(`Faltam ${verdeTempo} segundos para o farol AMARELO.`);
    verdeTempo--;
  }
  if (verdeTempo == 0) {
    console.log(`SINAL AMARELO, ATENÇÃO!.`);

    let amarelo = 0;
    let amareloTempo = 3;

    while (amareloTempo > amarelo) {
      console.log(`Faltam ${amareloTempo} segundos para o farol VERMELHO.`);
      amareloTempo--;
    }

    if (amareloTempo == 0) {
      console.log(`SINAL VERMELHO, PARE!!!.`);
    }

    let vermelho = 0;
    let vermelhoTempo = 7;
    while (vermelhoTempo > vermelho) {
      console.log(`Faltam ${vermelhoTempo} segundos para o farol VERDE.`);
      vermelhoTempo--;
    }

    if (vermelhoTempo == 0) {
      console.log(`SINAL VERDE, VÁ EM FRENTE.`);
    }
  }
  // return semaforo(); - chamada de loop.
}

semaforo();