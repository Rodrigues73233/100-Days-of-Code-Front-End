// 1. Faça um sistema que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
let anos = 20;
let meses = 10;
let dias = 15;

let diasNoAno = 365;
let diasNoMes = 30;

let diasTotais;

function calculaEmDias(anos, meses, dias) {
  diasTotais = (diasNoAno * anos) + (diasNoMes * meses) + dias
  
}



calculaEmDias(anos, meses, dias)
console.log(diasTotais)