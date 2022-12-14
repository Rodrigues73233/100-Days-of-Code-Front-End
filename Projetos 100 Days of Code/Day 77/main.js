// Exercicio 01
// let celsius = prompt('Qual a temperatura atual em Celsius ?')
// let resultado = document.querySelector('#resultado')

// function converteGraus() {

//   fahrenheit = ((9/5) * celsius) + 32 

//   console.log(fahrenheit)
// }

// converteGraus()

// Exercicio 02
let fahrenheit = prompt('Qual a temperatura atual em fahrenheit ?')
let resultado = document.querySelector('#resultado')

function converteGraus() {
  celsius = 5*(fahrenheit - 32) / 9

  console.log(celsius)

  resultado.innerHTML = `<h1>O resultado em graus Celsius é : ${celsius.toFixed(1)}</h1>`
}

converteGraus()