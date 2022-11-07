let botaoMultiCores = document.getElementById('botao-multi-cores')

let background = document.querySelector('.background')

function clicaBotao() {
  let randomBackgroundColor1 = Math.floor(Math.random() * (255 - 1 + 1)) + 1
  let randomBackgroundColor2 = Math.floor(Math.random() * (255 - 1 + 1)) + 1
  let randomBackgroundColor3 = Math.floor(Math.random() * (255 - 1 + 1)) + 1

  botaoMultiCores.style.background = `rgba(${randomBackgroundColor1},${randomBackgroundColor2},${randomBackgroundColor3}, 100%)`

  let novaCor = `rgba(${randomBackgroundColor1}, ${randomBackgroundColor2} ,${randomBackgroundColor3}, 75%)`
  
  background.style.background = `${novaCor}`
  
  console.log(novaCor)
}