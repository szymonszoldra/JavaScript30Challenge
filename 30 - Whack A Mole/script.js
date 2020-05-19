const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

const getRandomTime = (max, min) => Math.round(Math.random() * (max - min) + min);

const getRandomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return getRandomHole(holes);
  }

  lastHole = hole;
  return hole;
}

const peep = () => {
  const hole = getRandomHole(holes);
  const time = getRandomTime(200, 1000);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

const resetGame = () => {
  scoreBoard.textContent = '0';
  timeUp = false;
  score = 0;
}

const startGame = () => {
  resetGame();
  peep();
  setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
  if (!e.isTrusted) return;
  this.classList.remove('up');
  score++;
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk))