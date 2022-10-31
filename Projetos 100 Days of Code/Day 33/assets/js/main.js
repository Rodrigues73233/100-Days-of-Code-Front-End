let nome = document.getElementById('input-nome')
let gmail = document.getElementById('input-gmail')
let telefone = document.getElementById('input-telefone')
let competencia = document.getElementById('linguagem')

function confereCampos() {
  if (nome.value == '') {
    alert('Por favor entre com o seu Nome.')
    nome.focus()
    return false
  }

  if (gmail.value == '') {
    alert('Por favor entre com o seu Gmail.')
    gmail.focus()
    return false
  }

  if (telefone.value == '') {
    alert('Por favor entre com o seu telefone.')
    telefone.focus()
    return false
  }

  return true
}

function limpaCampos() {
  nome = ''
  gmail = ''
  telefone = ''
}
