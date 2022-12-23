// Pegando os botões
let startBtn = document.querySelector('#start-btn')
let pauseBtn = document.querySelector('#pause-btn')
let restartBtn = document.querySelector('#restart-btn')


// Pega as partes do cronômetro
let getSeconds = document.querySelector('#seconds')
let getMiliseconds = document.querySelector('#miliseconds')

window.onload = function () {
  let seconds = 00
  let miliseconds = 00

  let interval;

  startBtn.addEventListener('click', () => {
    clearInterval(interval)

    interval = setInterval(startTimer, 10)
    
  })
  
  function startTimer() {
    miliseconds++
    if (seconds <= 9) {
      getSeconds.innerHTML = "0" + seconds
    }
    if (seconds > 9) {
      getSeconds.innerHTML = seconds
    }
    if (miliseconds <= 9) {
      getMiliseconds.innerHTML = "0" + miliseconds
    }
    if (miliseconds > 9) {
      getMiliseconds.innerHTML = miliseconds
    }
    if (miliseconds > 99) {
      seconds++
      getSeconds.innerHTML = "0" + seconds;
      miliseconds = 0
      getMiliseconds.innerHTML = "0" + 0
    }
  }
  

  pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
  })

  restartBtn.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 00
    miliseconds = 00

    getSeconds.innerHTML = "00"
    getMiliseconds.innerHTML = "00"
  })
}