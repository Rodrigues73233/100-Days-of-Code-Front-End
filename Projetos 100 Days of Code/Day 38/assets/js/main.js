
function meuEscopo() {
  let form = document.querySelector('.formulario');
  let resultado = document.getElementById('resultado');

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault();
    let nome = form.querySelector('.nome')
    let funcao = form.querySelector('.funcao')
    let salario = form.querySelector('.salario')

    pessoas.push({
      nome: nome.value,
      funcao: funcao.value,
      salario: salario.value,
    })

    console.log(pessoas)

    resultado.innerHTML += `<p>Nome: ${nome.value}<br>Função: ${funcao.value}<br>Salário: ${salario.value}<br><br></p>`
  }

  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()