let images1 = document.getElementById('images-carrossel1')
let image1 = document.querySelectorAll('#images-carrossel1 img')

let imagemAtual1 = 0

function carrosselAutomatico1() {
  imagemAtual1++
  if (imagemAtual1 > image1.length - 1) {
    imagemAtual1 = 0
  }
  images1.style.transform = `translateX(${-imagemAtual1 * 500}px)`
}

setInterval(carrosselAutomatico1, 2500)

// ---------------------------