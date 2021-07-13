let playerscore = 0;
let computerscore = 0;
let PlayerChoice1 = "";

var pokemonimage = new Image();
pokemonimage.src = 'PokemonImg/Charmanderplayer.webp'

function pokemonshow(){
	var x = document.createElement("IMG");
	x.setAttribute("src", 'PokemonImg/Charmanderplayer.webp');
	x.setAttribute("width", "304");
	x.setAttribute("height", "228");
	x.setAttribute("alt", "The Pulpit Rock");
	document.body.appendChild(x);
	

}

const Firebutton = document.querySelector(".Firebtn")
const Waterbutton = document.querySelector(".Waterbtn")
Firebtn.addEventListener('click', function (e) {
	e.target.style.background = 'Red';
	let PlayerChoice1 = "Fire"
	document.body.appendChild(pokemonimage);
	console.log(PlayerChoice1); 
	
  });


Waterbtn.addEventListener('click', function (e) {
	e.target.style.background = 'Blue';
	let PlayerChoice1 = "Water"
	console.log(PlayerChoice1); 
  });
const buttons = document.querySelectorAll('button');

//picks number between 1-4
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




//Capitilizes First Letter
function capitalize(word){
    var capfirst = word.toLowerCase();
    first = capfirst.charAt(0).toUpperCase();
    var stringWithoutFirstLetter = capfirst.slice(1)
    var capitalword = first + stringWithoutFirstLetter;
    return capitalword
};
 
//Checks if Word exists in array
function WordCheck(word){
    var wordchoice = ["Fire","Water", "Grass", "Ice","Rock"];
  
  
    if (wordchoice.includes(word)) {
          return word 
      } else {
          return "This word doesnt seem to work..."
      }
    
};

function player1(){
	var pokemontype = prompt("Fire, Water, Grass, Ice, Rock, shoot!");
	var capital = capitalize(pokemontype);
	var playerresult = WordCheck(capital); 
   
	
	
	return playerresult
   
};


function playRound(playerSelection, computerSelection) {
	document.write("The Player picked:" + " " + playerSelection + "<br>")
	document.write("The Computer picked:" + " " + computerSelection + "<br>")
	let player = playerSelection;
	let computer = computerSelection;
		
	if (player === 'Fire') {
		if (computer === 'Fire') {
			
		  return 'Draw'
		} 
		
		else if (computer === 'Water') {
			document.write('Water puts out your Fire type! You Lose!')
			document.write('<br>')
		  return 'Lose'
		} 
		
		else if (computer === 'Rock') {
			document.write('Water puts out your Fire type! You Lose!')
			document.write('<br>')
			return 'Lose'
		  } 
		
		  else {
			let outcome = "was super effect against"
			document.write(player + " " + outcome + " " + computer) 
			return 'Win'
		  
		}
  
	  }
	  //If player chooses Ice
	  else if (player === 'Ice') {
		if (computer === 'Ice') {
		  return 'It\'s a tie. Try again'
		}
		else if (computer === 'Fire') {
			document.write('Fire Melts your Ice Type! You Lose')
		  return computerpoint
		}else if (computer === 'Rock') {
		  return 'Rock Crushes your Ice Type! You Lose'
		}else {
			let outcome = "was super effect against"
			return player + " " + outcome + " " + computer; 
		}
	  }
  
	  //If player chooses Grass
	  else if (player === 'Grass') {
		if (computer === 'Grass') {
		  return 'It\'s a tie. Try again'
		}
		else if (computer === 'Fire') {
		  return 'Fire Burns your Grass Type! You Lose'
		}else if (computer === 'Ice') {
		  return 'Ice Freezes your Grass Type! You Lose'
		}else {
			let outcome = "was super effect against"
			return player + " " + outcome + " " + computer; 
		}
	  }
	//If player chooses Water
	else if (player === 'Water') {
		if (computer === 'Water') {
		  return 'It\'s a tie. Try again'
		}
		else if (computer === 'Grass') {
		  return 'Grass Absorbs your Water Type! You Lose'
		}else if (computer === 'Ice') {
		  return 'Ice Freezes your Water Type! You Lose'
		}else {
			let outcome = "was super effect against"
			return player + " " + outcome + " " + computer; 
		}
	  }
	
		//If player chooses Rock
	else if (player === 'Rock') {
			if (computer === 'Rock') {
			  return 'It\'s a tie. Try again'
			}
			else if (computer === 'Grass') {
			  return 'Grass crushed your Roack Type! You Lose'
			}else if (computer === 'Water') {
			  return 'Water Errodes your Rock Type! You Lose'
			}else {
				let outcome = "was super effect against"
				return player + " " + outcome + " " + computer; 
			}
		  }
		

};

//document.querySelector('button').addEventListener("click", () => {
//console.log('clicked')
	let playerScore = 0;
	let computerScore = 0;
	for(let i = 0; i<5; i++){
		
		let result = playRound(player1(), computerPlay()); //Win, Lose, Draw
		
		if(result === "Win"){
		playerScore++;
		document.write( "player score:" + playerScore + ":" + "computer score:" + computerScore);
		document.write('<br>')
		
		}else if(result === "Draw") {
		computerScore++;
		document.write( "player score:" + playerScore + ":" + "computer score:" + computerScore);
		document.write('<br>')
		}else {
		computerScore++;
		document.write( "player score:" + playerScore + ":" + "computer score:" + computerScore);
		document.write('<br>')
	}
	
	}

//})

function testfunction(){
	console.log("button clicked")
	console.log(document.write(playerScore))
}
function gameScore() {
	
	
	
		let result = playRound(player1(), computerPlay());
		console.log('game score function loads');
		let playerScore = 0;
		let computerScore = 0;
		for(let i = 0; i<5; i++){
		if (result === 'Win') {
			document.write('<br>')
			document.write('player 1 wins')
			document.write('<br>')
			document.write('<br>')
			playerScore++;
		  //} //else if (result === 'Draw') {
			//draws++;
		  } else {
			computerScore++;
		  } 
		  
		  let Score = "Player score:" + playerScore + " - " + "computerscore:" + computerScore;
		  console.log(Score)
		  document.write(Score)
		}
		return
		  
	


	
	
	//let score = 'Player' + playerScore + ':' + "Computer" + computerScore;  
    //document.write(score)

}
/*	if (playerScore === 5) {
	  console.log(playerWin);
	  return;
	}
	if (computerScore === 5) {
	  console.log(computerWin);
	  return;
	}
	*/

  
//gameScore()
  
