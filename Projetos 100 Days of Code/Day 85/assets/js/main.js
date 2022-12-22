let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');


let startBtn = document.querySelector('#button-start');
let stopBtn = document.querySelector('#button-stop');
let resetBtn = document.querySelector('#button-reset');

window.onload = function () {
  let seconds = 00
  let tens = 00

  let interval;

  startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(() => {
      startTimer()
    }, 10)
  })

  stopBtn.addEventListener('click', () => {
    clearInterval(interval)
  })

  resetBtn.addEventListener('click', () => {
    clearInterval(interval)
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  })

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}