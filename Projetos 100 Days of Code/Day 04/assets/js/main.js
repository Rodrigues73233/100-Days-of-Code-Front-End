let resultado = document.getElementById('resultado')

let number1 = document.getElementById('number-1')
let number2 = document.getElementById('number-2')
let number3 = document.getElementById('number-3')
let number4 = document.getElementById('number-4')
let number5 = document.getElementById('number-5')

resultado.innerHTML = ("You selected 3 out of 5")

function button1() {
  console.log("botao 1")
  resultado.innerHTML = ("You selected 1 out of 5")
}

function button2() {
  console.log("botao 2")
  resultado.innerHTML = ("You selected 2 out of 5")
}

function button3() {
  console.log("botao 3")
  resultado.innerHTML = ("You selected 3 out of 5")
}

function button4() {
  console.log("botao 4")
  resultado.innerHTML = ("You selected 4 out of 5")
}

function button5() {
  console.log("botao 5")
  resultado.innerHTML = ("You selected 5 out of 5")
}

