// 3. Faça um sistema que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.

let tempoEmSegundos = 360000;

let minutosPorHora = 60
let segundosPorMinuto = 60
let segundosPorHora =(minutosPorHora * segundosPorMinuto)

function calculaTempo() {
  let horas = Math.floor(tempoEmSegundos / segundosPorHora)
  let minutos = Math.floor((tempoEmSegundos - (horas * segundosPorHora)) / minutosPorHora);
  let segundos = Math.floor(tempoEmSegundos - ((horas * segundosPorHora) + (minutos * segundosPorMinuto)));

  console.log(horas, minutos, segundos)
}

calculaTempo()