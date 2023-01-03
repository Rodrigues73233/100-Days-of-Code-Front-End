// 2. Faça um sistema que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias.


function mostraIdade() {
  let idadeEmDias = 7615

  let diasDoAno = 365;
  let diasDoMes = 30;

  let anos;
  let meses;
  let dias;

  anos = Math.floor(idadeEmDias / diasDoAno)
  meses = Math.floor(idadeEmDias - (anos * diasDoAno)) / diasDoMes
  dias = Math.floor(idadeEmDias - ((anos * diasDoAno) + (meses * diasDoMes)));

  console.log(anos, meses, dias)
}

mostraIdade()