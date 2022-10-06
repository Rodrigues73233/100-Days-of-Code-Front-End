// Contador de produtos
let menos = document.getElementById('minus');
let contador = document.getElementById('contador');
let mais = document.getElementById('plus');
let numeroContagem = 0;


function diminuir() {
  if (numeroContagem > 0) {
    numeroContagem--
    contador.innerHTML = (`${numeroContagem}`)
  }
}

function somar() {
  if (numeroContagem >= 0) {
    numeroContagem++
    contador.innerHTML = (`${numeroContagem}`)
  }
}

// Modal
const abrirmodal = document.querySelector('#abrir-modal')
const fecharmodal = document.querySelector('#fechar-modal')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const eventos = [abrirmodal,fade,fecharmodal]

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

setTimeout(toggleModal, 5000)

eventos.map((el)=>{
    el.addEventListener('click', ()=> toggleModal())
})