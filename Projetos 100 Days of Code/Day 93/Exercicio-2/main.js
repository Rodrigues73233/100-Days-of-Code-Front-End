function destacar() {
  let nome = document.querySelector('#nome')
  let lista = document.querySelector('.listaDeNomes')
  let listaDeNomes = lista.querySelectorAll('li')
  let novaLista = []

  for (let i = 0; i< listaDeNomes.length; i++) {
    let nomeAtual = listaDeNomes[i].textContent
    if (nome.value == nomeAtual) {
      let li = document.createElement("li")
      let strong = document.createElement("strong")
      strong.innerText = nomeAtual;
      li.appendChild(strong)
      novaLista.push(li)
    }
    else {
      let li = document.createElement("li");
      li.innerText = nomeAtual;
      novaLista.push(li)
    }
  }
  lista.innerText = ""
  for (let i = 0; i < novaLista.length; i++) {
    lista.appendChild(novaLista[i])
  }
  console.log(novaLista)
}