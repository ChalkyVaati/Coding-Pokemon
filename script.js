let playerscore = 0;
let computerscore = 0;
document.write(Math.floor(Math.random()*4))
function computerPlay() {
	let randomNumber = Math.floor(Math.random()*5 )
	if (randomNumber === 0) {
		return "Fire" 
	} else if ((randomNumber === 1) ) {
		return "Water"
    
	} else if ((randomNumber === 2) ) {
		return "Grass"
    
	}else if ((randomNumber === 3) ) {
		return "Ice"
  
  } else {
		return "Rock"
	}
};

function capitalize(word){
  var capfirst = word.toLowerCase();
  first = capfirst.charAt(0).toUpperCase();
  var stringWithoutFirstLetter = capfirst.slice(1)
  var capitalword = first + stringWithoutFirstLetter;
  return capitalword
};
//document.write(capitalize());

function WordCheck(word){
  var wordchoice = ["Fire","Water", "Grass", "Ice","Rock"];
  var checkbook = wordchoice.includes(word);

  if (wordchoice.includes(word)) {
		return word 
	} else {
		return "This word doesnt seem to work..."
	}
  
}

function player1(){
 var playerSelection = prompt("Fire, Water, Grass, Ice, Rock, shoot!");
 var capital = capitalize(playerSelection);
 var playerresult = WordCheck(capital); 


 
  return playerresult

};
document.write(player1());
const computerSelection = computerPlay()
document.write(computerPlay());

function playRound(playerSelection, computerSelection) {
		if ((playerSelection == "Fire" &&	computerSelection == "Fire")

		  || (playerSelection == "Water" && computerSelection == "Water")

		  || (playerSelection == "Grass"	&& computerSelection == "Grass")

      || (playerSelection == "Ice"	&& computerSelection == "Ice")
      
      || (playerSelection == "Rock"	&& computerSelection == "Rock")) {
			console.log("Same answers! It's a tie!") 

	} else if (playerSelection.toLowerCase()  == "rock" 
		&& computerSelection == "scissors") {
		console.log("Rock beats scissors! You win!") 
		playerScore++
	}
	else if (playerSelection.toLowerCase()  == "paper" 
		&& computerSelection == "rock")  {
		console.log("Paper beats rock! You win!") 
		playerScore++
	} else if (playerSelection.toLowerCase()  == "scissors" 
		&& computerSelection == "paper"){ 
		console.log("Scissors beats paper! You win!") 
		playerScore++
	} else if (computerSelection  == "rock" 
		&& playerSelection.toLowerCase() == "scissors") {
		console.log("Rock beats scissors! Computer wins!") 
	}
	else if (computerSelection  == "paper" 
		&& playerSelection.toLowerCase() == "rock")  {
		console.log("Paper beats rock! Computer wins!") 
		computerScore++
	} else if (computerSelection  == "scissors" 
		&& playerSelection.toLowerCase() == "paper"){ 
		console.log("Scissors beats paper! Computer wins!" ) 
		computerScore++
	} else {
		console.log("You can't use that in this game..."
	)}
}
function game() {
	
	for(i = 0; i > 5; i++) {
		playRound()
		console.log ("Player: " + playerScore + "Computer: " + computerScore)
	} 
}
//const playerSelection = 'rock'
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection))