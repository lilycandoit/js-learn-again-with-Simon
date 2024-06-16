
      const randomNumber = Math.random();
      let computerMove = '';
      let result = '';
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      const resultEl = document.querySelector('.js-result');

      const optionEl = document.querySelector('.js-option');

      const scoreEl = document.querySelector('.js-show-score');

      const resetBtn = document.querySelector('.js-reset-btn');

      function displayScore() {
        scoreEl.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function displayResult(playerMove) {
        pickComputerMove();

        if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'Tie';
          } else if (computerMove === 'Paper') {
            result = 'You lose';
          } else {
            result = 'You win';
          }
        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You win';
          } else if (computerMove === 'Paper') {
            result = 'Tie';
          } else {
            result = 'You lose';
          }
        } else {
          if (computerMove === 'Rock') {
            result = 'You lose';
          } else if (computerMove === 'Paper') {
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

        resultEl.innerText = `Result: ${result}`;
        optionEl.innerHTML = `You <img src="${playerMove}-emoji.png" class="move-image"> <img src="${playerMove}-emoji.png" class="move-image"> Computer`;

        displayScore();
      }

      function pickComputerMove() {
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else {
          computerMove = 'Scissors';
        }
      }

      function saveToStorage() {
        localStorage.setItem('score', JSON.stringify(score));
      }

      // in case we want to use return
      /*
      function pickComputerMove() {
        // we can put this variable in function scope
        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'Paper';
        } else {
          computerMove = 'Scissors';
        }

        //because it allow us to get value OUT OF the function
        return computerMove;
      }
        */
    