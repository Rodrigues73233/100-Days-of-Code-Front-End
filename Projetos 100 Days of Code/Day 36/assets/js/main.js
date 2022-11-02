// Confirmações Formulário
let nome = document.getElementById('input-nome')
let telefone = document.getElementById('input-telefone')
let gmail = document.getElementById('input-gmail')
let lembrarDeMim = document.getElementById('lembrar')

function confereCampos() {
  if (nome.value == '') {
    alert('Por favor entre com o seu Nome.')
    nome.focus()
    return false
  }

  
  if (telefone.value == '') {
    alert('Por favor entre com o seu telefone.')
    telefone.focus()
    return false
  }
  
  if (gmail.value == '') {
    alert('Por favor entre com o seu Gmail.')
    gmail.focus()
    return false
  }
  
  return true
}

function limpaCampos() {
  nome = ''
  gmail = ''
  telefone = ''
}
// ----------------

// Menu responsivo 
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// ----------------