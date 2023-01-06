// O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escrever um sistema que leia o custo de fábrica de um carro e escreva o custo ao consumidor.


let fabrica = 5000;
let distribuidor = 0.28
let impostos = 0.45

let custoCarro;

function calculaCustos() {
  let valorDistribuidor = fabrica * distribuidor
  let valorImpostos = fabrica * impostos

  custoCarro = fabrica + valorDistribuidor + valorImpostos

  console.log(custoCarro)
}

calculaCustos()
