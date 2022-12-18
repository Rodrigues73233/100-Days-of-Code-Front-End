let buttonIdade = document.querySelector('#verificaIdade')
let resultado = document.querySelector('#resultado')


buttonIdade.addEventListener('click', () => {
  let data = new Date()
  let anoAtual = data.getFullYear()
  let anoFormulario = document.querySelector('#txtAno')
  if (anoFormulario.value.length == 0 || anoFormulario.value >= anoAtual) {
    alert('Verifique os dados e tente novamente !')
  }
  else {
    let sexoFormulario = document.getElementsByName('radsex')
    let idade = anoAtual - anoFormulario.value
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexoFormulario[0].checked) {
      genero = "Masculino"
      if (idade <= 12) {
        img.setAttribute('src', '../assets/images/menino.jpg') 
      }
      else if (idade <= 18) {
        img.setAttribute('src', '../assets/images/homem-jovem.jpg') 
      }
      else if (idade <= 40) {
        img.setAttribute('src', '../assets/images/homem.jpg') 
      }
      else if (idade >= 60) {
        img.setAttribute('src', '../assets/images/idoso.jpg') 
      }
    }
    else if (sexoFormulario[1].checked) {
      genero = "Feminino"
      if (idade <= 12) {
        img.setAttribute('src', '../assets/images/menina.jpg') 
      }
      else if (idade <= 18) {
        img.setAttribute('src', '../assets/images/mulher-jovem.jpg') 
      }
      else if (idade <= 40) {
        img.setAttribute('src', '../assets/images/mulher.jpg') 
      }
      else if (idade >= 60) {
        img.setAttribute('src', '../assets/images/idosa.jpg') 
      }
    }
    resultado.innerHTML = `Genero ${genero} com a idade de ${idade} anos`
    resultado.appendChild(img)
  }
})

