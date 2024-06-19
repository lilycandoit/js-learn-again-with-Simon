let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

displayScore();

// to stop autoPlay
let isAutoPlaying = false;
let intervalId; // we have to put the intervalId outside of the function, so we get the latest update of intervalId (since the intervalI keeps changing each time the function runs)

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      displayResult(playerMove);
    }, 1000);

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function displayResult(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins++;
  } else if (result === 'You lose') {
    score.losses++;
  } else if (result === 'Tie') {
    score.ties++;
  }

  saveToStorage();
  displayScore();

  document.querySelector('.js-result').innerText = `Result: ${result}`;

  document.querySelector('.js-option').innerHTML = `You <img src="${playerMove}-emoji.png" class="move-image"> <img src="${computerMove}-emoji.png" class="move-image"> Computer`;
}

function displayScore() {
  document.querySelector(
    '.js-show-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  // we can put this variable in function scope
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  //because it allow us to get value OUT OF the function
  return computerMove;
}

function saveToStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
