// Velocidade máxima de 70KM
// A cada 5KM acima do limite você ganha 1 ponto na carteira
// Pontos maior que 12 = Carteira Suspendida

// let maxVelocidade = 70;
// let kmPorPonto = 5;
// let maxPontos = 12;

// function verificaVelocidade(velocidade) {
//   if (velocidade > maxVelocidade) {
//     let velocidadeRestante = Math.floor(velocidade - maxVelocidade)
//     let pontosAtuais = Math.floor(velocidadeRestante / kmPorPonto)
//     console.log(`Ponto Adicionado, ${pontosAtuais} pontos atuais`)
//     if (pontosAtuais >= maxPontos) {
//       console.log("Sua carteira foi suspendida, você atingiu o número máximo de pontos")
//     }
//     else {
//       console.log(`Sua carteira tem ${pontosAtuais} pontos`)
//     }
//   }
//   else {
//     console.log("Velocidade Normal")
//   }
// }
// verificaVelocidade(117)


// Recebe uma quantidade de valores para avaliar
// Função exibe se cada valor avaliado é par ou ímpar

// function exibeTipoValor(limite) {
//   for (let i = 0; i <= limite; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} é par`)
//     }
//     else if (i % 2 === 1) {
//       console.log(`${i} é ímpar`)
//     }
//   }
// }

// exibeTipoValor(20)