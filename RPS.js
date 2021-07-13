function computerPlay() {
    let selectRandom = Math.floor(Math.random() * 3);
    if (selectRandom === 0) {
      return 'Rock';
    } else if (selectRandom === 1) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }

  //Play round between human and computer
  function playRound(playerSelection, computerSelection) {

    //Change to lowercase
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();


    //If player chooses rock
    if (player === 'rock') {
      if (computer === 'rock') {
        return 'It\'s a tie. Try again'
      } else if (computer === 'paper') {
        return 'You loose. Paper beats Rock'
      } else {
        return 'You win. Rock beats scissors'
      }

    }
    //If player chooses paper
    else if (player === 'paper') {
      if (computer === 'paper') {
        return 'It\'s a tie. Try again'
      }
      if (computer === 'scissors') {
        return 'You loose. Scissors beats Paper'
      } else {
        return 'You win. Paper beats Rock'
      }
    }

    //If player chooses scissors
    else {
      if (computer === 'scissors') {
        return 'It\'s a tie. Try again'
      } else if (computer === 'rock') {
        return 'You lose. Rock beats Scissors'
      } else {
        return 'You win. Scissors beats Paper'
      }
    }
  }

  const playerSelection = 'Paper';
  const computerSelection = computerPlay();
  console.log('Computer chose: ' + computerSelection);
  console.log(playRound(playerSelection, computerSelection));