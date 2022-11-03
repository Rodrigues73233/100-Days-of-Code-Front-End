let button = document.getElementById('main-button');

let main = document.getElementById('fundo')


function mouseEnter() {
  button.style.background = '#6C4AB6'
  main.style.background = '#8f00f5'
}

function mouseLeave() {
  button.style.background = '#9F73AB'
  button.innerHTML = "Pressione"
  main.style.background = '#4a1370'
}

function pressiona() {
  button.style.background = '#8D9EFF'
  button.innerHTML = "Solte"
  main.style.background = '#1daae9'
}

function solta() {
  button.style.background = '#68686a'
  main.style.background = '#252528'
}





