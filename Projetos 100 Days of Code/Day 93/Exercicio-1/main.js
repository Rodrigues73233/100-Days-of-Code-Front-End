let numero = document.querySelector('#numero')
let resultado = document.querySelector('#resultado')



function mostraTabuada() {
  resultado.innerHTML = ""
  for (let i = 0; i <= 10; i++) {
    let div = document.createElement("div");
    div.innerText = numero.value * i;
    resultado.appendChild(div)
  }
}
