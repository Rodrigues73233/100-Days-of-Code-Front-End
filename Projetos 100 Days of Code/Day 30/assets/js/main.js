const getHours = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)


const data = new Date()

let mostraData = document.getElementById('date')

const dia = String(data.getDate()).padStart(2, '0')

const mes = String(data.getMonth() + 1).padStart(2, '0')

const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`

mostraData.innerHTML = dataAtual