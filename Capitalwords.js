


  
  function player1(){
   var playerSelection = prompt("Fire, Water, Grass, Ice, Rock, shoot!");
   var capital = capitalize(playerSelection);
   var playerresult = WordCheck(capital); 
  
  
   
    return playerresult
  
  };
  
  document.write("You picked: "+ player1());
  document.write("The computer picked: " + computerPlay());
  const computerselection = computerPlay();
  const playerselection = player1();
  
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
  
  
  function game() {
      
      for(i = 0; i > 5; i++) {
          playRound()
          console.log ("Player: " + playerScore + "Computer: " + computerScore)
      } 
  }
  const playerSelection = 'rock'
  const computerSelection = computerPlay()
  console.log(playRound(playerSelection, computerSelection))