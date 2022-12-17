let body = document.querySelector('#body')

let horasDia = document.querySelector('#horasDia')

let img = document.querySelector('#img')

let data = new Date()

let horaAtual = data.getHours()

horasDia.innerHTML = `<h3>Agora são ${horaAtual} horas.</h3>`

function AlteraTela() {
  if (horaAtual <= 12) {
    body.style.backgroundColor = '#FCF7DA'
    img.src = './images/amanhecer.jpg'
  }
  else if (horaAtual <= 18) {
    body.style.backgroundColor = '#FE931C'
    img.src = './images/entardecer.jpg'
  }
  else if (horaAtual <= 24) {
    body.style.backgroundColor = '#662E73'
    img.src = './images/anoitecer.jpg'
  }
}
AlteraTela()



