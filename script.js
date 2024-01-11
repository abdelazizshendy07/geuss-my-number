'use strict';
const click = document.querySelector('.btn__click');
const again = document.querySelector('.btn__again');
const message = document.querySelector('.message');
const highScore = document.querySelector('.number__highscour');
const guessNumber = document.querySelector('.guess__number');
const number = document.querySelector('.number');
const scoreNum = document.querySelector('.number__score');
let scoreNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscour = 0;

click.addEventListener('click', function () {
  const guess = Number(guessNumber.value);
  if (!guess) {
    message.textContent = '❌ this not number';
  }
  // when he guess currect (win)
  else if (guess === scoreNumber) {
    message.textContent = '🎉 currect number';
    document.querySelector('.header').style.backgroundColor = '#61a9d5';
    number.textContent = scoreNumber;

    if (score > highscour) {
      highscour = score;
      highScore.textContent = highscour;
    }
  }
  // when he guess wrong (false)
  else if (guess !== scoreNumber) {
    if (score > 1) {
      message.textContent = guess > scoreNumber ? '⬇️ too low' : '⬆️ too high';
      score--;
      scoreNum.textContent = score;
    } else {
      message.textContent = 'you lose the game';
    }
  }
});

again.addEventListener('click', function () {
  scoreNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number__score').textContent = score;
  message.textContent = 'start guessing....';
  document.querySelector('.header').style.backgroundColor = '#071016';
  guessNumber.value = '';
  number.textContent = '?';
});
