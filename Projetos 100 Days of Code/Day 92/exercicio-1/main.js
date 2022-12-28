
window.onload = function () {
  let getSeconds = document.querySelector('#seconds')
  let getMiliSeconds = document.querySelector('#miliseconds')
  
  let startBtn = document.querySelector('#button-start')
  let stopBtn = document.querySelector('#button-stop')
  let resetBtn = document.querySelector('#button-reset')

  let seconds = 00
  let miliseconds = 00

  let interval;

  startBtn.addEventListener('click', () => {

    clearInterval(interval)
    interval = setInterval(startTimer, 10)
  })

  function startTimer() {
    miliseconds++

    if (miliseconds <= 9) {
      getMiliSeconds.innerHTML = "0" + miliseconds
    }

    if (miliseconds > 9) {
      getMiliSeconds.innerHTML = miliseconds
    }

    if (miliseconds > 99) {
      seconds++
      getSeconds.innerHTML = "0" + seconds
      miliseconds = 0
      getMiliSeconds.innerHTML = "0" + miliseconds
    }

    if (seconds > 9) {
      getSeconds.innerHTML = seconds
    }
  }

  stopBtn.addEventListener('click', () => {
    clearInterval(interval)
  })

  resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    seconds = "00"
    miliseconds = "00"
    getSeconds.innerHTML = seconds
    getMiliSeconds.innerHTML = miliseconds
  })
}