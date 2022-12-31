const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

// Altera as cores do robo

let roboAmarelo = document.querySelector('.r-amarelo')
let roboAzul = document.querySelector('.r-azul')
let roboBranco = document.querySelector('.r-branco')
let roboPreto = document.querySelector('.r-preto')
let roboRosa = document.querySelector('.r-rosa')
let roboVermelho = document.querySelector('.r-vermelho')

let robo = document.querySelector('.robo')

roboAmarelo.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png')
})
roboAzul.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Azul/Robotron 2000 - Azul.png')
})
roboBranco.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Branco/Robotron 2000 - Branco.png')
})
roboPreto.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Preto/Robotron 2000 - Preto.png')
})
roboRosa.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png')
})
roboVermelho.addEventListener('click', () => {
    robo.setAttribute('src', 'img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png')
})