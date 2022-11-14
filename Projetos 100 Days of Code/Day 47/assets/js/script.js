let data = document.getElementById('anoNascimento')

let button = document.querySelector('div#main-button')

let sexo = document.getElementsByName('sexo')

let resultado = document.getElementById('resultado')

let image = document.getElementById('main-image')

function calcular() {
  let date = new Date()
  let anoAtual = date.getFullYear()

  let idade = anoAtual - data.value

  if (sexo[0].checked) {
    resultado.innerHTML = `<h2>Homem com ${idade} anos<h2>`

    if (idade < 10) {
      image.src = "menino.jpg"
    }
    else if (idade < 18) {
      image.src = "menino-adolescente.jpg"
    }
    else if (idade < 38) {
      image.src = "homem.jpg"
    }
    else {
      image.src = "homem-idoso.jpg"
    }
  }

  else if (sexo[1].checked) {
    resultado.innerHTML = `<h2>Mulher com ${idade} anos<h2>`

    if (idade < 10) {
      image.src = "menina.jpg"
    }
    else if (idade < 18) {
      image.src = "menina-adolescente.jpg"
    }
    else if (idade < 38) {
      image.src = "mulher.jpg"
    }
    else {
      image.src = "mulher-idosa.jpg"
    }
  }
}
