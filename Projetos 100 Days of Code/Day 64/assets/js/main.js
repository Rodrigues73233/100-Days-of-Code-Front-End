let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  let randomNumber = (Math.random() * 2).toFixed(0);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter === "r") {
    return "Pedra"
  };
  if(letter === "p") {
    return "Papel"
  };
  if(letter === "s") {
    return "Tesoura"
  };
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerText = `${userScore}`;
  result_p.innerHTML = convertToWord(userChoice) + " destruiu " + convertToWord(computerChoice) +". Você Venceu! 😎";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerText = `${computerScore}`
  result_p.innerHTML = convertToWord(userChoice) + " não destruiu " + convertToWord(computerChoice) +". Você Perdeu! 😥";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}
function draw(userChoice, computerChoice) {
  result_p.innerHTML = convertToWord(userChoice) + " Empatou com " + convertToWord(computerChoice) +". Houve um empate! 😐";
  document.getElementById(userChoice).classList.add('black-glow');
  setTimeout(() => { document.getElementById(userChoice).classList.remove('black-glow') }, 500)
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', function() {
    game('r');
  })
  
  paper_div.addEventListener('click', function() {
    game('p');
  })
  
  scissors_div.addEventListener('click', function() {
    game('s');
  })
}

main();


