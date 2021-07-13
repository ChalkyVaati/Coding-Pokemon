
const game = ()=> {
	let pScore = 0;
	let cScore = 0;
	//Start the Game
	const startGame = () =>{
		const PlayButton = document.querySelector("a.popup-button");
		console.log(PlayButton)
		const introScreen = document.querySelector('.intro');
		const PokemonBattle = document.querySelector('.Match');

		PlayButton.addEventListener('click', () =>{
			introScreen.classList.add('fadeOut');
			PokemonBattle.classList.add("fadeIn");
		} )
	}
	//Play Match
	function pokemonshow(pokeword){
		if (pokeword === 'Fire'){
			var pic = 'PokemonImg/Charmanderplayer.webp'
			document.getElementById('bigpic').style.marginBottom ='-24px'
		}else if (pokeword === 'Water'){
			var pic = 'PokemonImg/Squirtleplayer.webp'
			document.getElementById('bigpic').style.marginBottom ='-24px'
		}else if (pokeword === 'Grass'){
			var pic = 'PokemonImg/BulbasaurPic.webp'
			
			document.getElementById('bigpic').style.marginBottom ='-28px'
		}else if (pokeword === 'Rock'){
			var pic = 'PokemonImg/Larvitarplayer.webp'
			document.getElementById('bigpic').style.marginBottom ='-12px'
		}else if (pokeword === 'Ice'){
			var pic = 'PokemonImg/Snoruntplayer.webp'
			document.getElementById('bigpic').style.marginBottom ='-16px'
		}
		
		
		document.getElementById('bigpic').src = pic.replace('240x240', '225x225');
		document.getElementById('bigpic').style.height ='124px'
		document.getElementById('bigpic').style.display='flex';
		
	
	}
	

	function pokemonshowcomp(computerimgpic){
		var sound = new Audio();
		if (computerimgpic === 'Fire'){
			var comppic = 'PokemonImg/CharmanderComp.png'
			sound.src = 'PokemonSound/charmander.mp3'
		}else if (computerimgpic === 'Water'){
			var comppic = 'PokemonImg/SquirtleComp.png'
			sound.src = 'PokemonSound/squirtle.mp3'
		
		}else if (computerimgpic === 'Grass'){
			var comppic = 'PokemonImg/BulbasaurComp.png'
			sound.src = 'PokemonSound/bulbasaur.mp3'
			
		}else if (computerimgpic === 'Rock'){
			var comppic = 'PokemonImg/LarvitarComp.png'
			sound.src = 'PokemonSound/larvitar.mp3'
		}else if (computerimgpic === 'Ice'){
			var comppic = 'PokemonImg/SnoruntComp.png'
			sound.src = 'PokemonSound/snorunt1.mp3'
		}
		sound.play()
		document.getElementById('ComputerImg').src = comppic.replace('240x240',);
		document.getElementById('ComputerImg').style.height ='124px'
		document.getElementById('ComputerImg').style.textAlign = "right";
		document.getElementById('ComputerImg').style.display='flex';
		
		
	}
	
	
	//Variable for the each button
	const Firebutton = document.querySelector(".FireBtn")
	const Waterbutton = document.querySelector(".WaterBtn")
	const Icebutton = document.querySelector(".IceBtn")
	const Grassbutton = document.querySelector(".GrassBtn")
	const Rockbutton = document.querySelector(".RockBtn")
	//Computer Pick
	const ComputerOptions = ["Fire", "Water,", "Grass", "Ice", "Rock"]
	function computerPlay() {
		let Computerpokemon = Math.floor(Math.random()*5 );
		return ComputerOptions[Computerpokemon];
	};
	
	//Changing Score based on user Choice
	const updateScore = () =>{
		const playerScore = document.querySelector('.Player-score p')
		const computerScore = document.querySelector('.Computer-score p')
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	}
	function playRound(playerSelection) {
		let computerchoice = computerPlay()
		pokemonshow(playerSelection);
		pokemonshowcomp(computerchoice)
		let player = playerSelection;
		let computer = computerchoice;
		MessageF(player, computer)	
		if (player === 'Fire') {
			if (computer === 'Fire') {
				
				document.getElementById("Message").innerHTML = "Fight Fire with Fire! Its a Draw!";
				
			  return 'Draw'
			} 
			
			else if (computer === 'Water') {
				
				document.getElementById("Message").innerHTML = "Water Puts out Fire! You Lose!";
				cScore++
				updateScore();
			  return 'Lose'
			} 
			
			else if (computer === 'Rock') {
				
				document.getElementById("Message").innerHTML = "Rock puts out Fire! You Lose!";
				cScore++
				updateScore();
				return 'Lose'
			  } 
			
			  else {
				
				let outcome = "was super effect against"
				document.getElementById("Message").innerHTML = player + " " + outcome + " " + computer + " " + "You Win!"
				pScore++
				updateScore();
				return 'Win'
			  
			}
	  
		  }
		  //If player chooses Ice
		  else if (player === 'Ice') {
			if (computer === 'Ice') {
				document.getElementById("Message").innerHTML = "Its not very Effective! Its a Draw!";
			  return 'Draw'
			}
	
			else if (computer === 'Fire') {
				document.getElementById("Message").innerHTML = 'Fire Melts your Ice Type! You Lose';
				cScore++
				updateScore();
				return 'Lose'
	
			}
			
			else if (computer === 'Rock') {
				document.getElementById("Message").innerHTML = 'Rock Crushes your Ice Type! You Lose';
				cScore++
				updateScore();   
				return 'Lose'
	
			}else {
				let outcome = "was super effect against";
				document.getElementById("Message").innerHTML = player + " " + outcome + " " + computer + " " + "You Win!";
				pScore++
				updateScore();
				return 'Win';
			}
		  }
	  
		  //If player chooses Grass
		  else if (player === 'Grass') {
			if (computer === 'Grass') {
				document.getElementById("Message").innerHTML = "Its not very Effective! Its a Draw!";
				
			  return 'Draw'
			}
			else if (computer === 'Fire') {
				document.getElementById("Message").innerHTML = 'Fire Burns your Grass Type! You Lose';
				cScore++
				updateScore(); 
			  return 'Lose'
			}else if (computer === 'Ice') {
				document.getElementById("Message").innerHTML = 'Ice Freezes your Grass Type! You Lose';
				cScore++
				updateScore(); 
			  return 'Lose'
			}else {
				let outcome = "was super effect against";
				document.getElementById("Message").innerHTML = player + " " + outcome + " " + computer + " " + "You Win!";
				pScore++
				updateScore(); 
				return 'Win';
			}
		  }
		//If player chooses Water
		else if (player === 'Water') {
			if (computer === 'Water') {
				document.getElementById("Message").innerHTML = "Its not very Effective! Its a Draw!";
			  return 'Draw'
			}
			else if (computer === 'Grass') {
				document.getElementById("Message").innerHTML = 'Grass Absorbs your Water Type! You Lose';
				cScore++
				updateScore(); 
			  return 'Lose'
			}else if (computer === 'Ice') {
				document.getElementById("Message").innerHTML = 'Ice Freezes your Water Type! You Lose';
				cScore++
				updateScore(); 
			  return 'Lose'
			}
			else {
				let outcome = "was super effect against";
				document.getElementById("Message").innerHTML = player + " " + outcome + " " + computer + " " + "You Win!";
				pScore++
				updateScore(); 
				return 'Win';
			}
		  }
		
			//If player chooses Rock
		else if (player === 'Rock') {
				if (computer === 'Rock') {
					document.getElementById("Message").innerHTML = "Its not very Effective! Its a Draw!";
					
				  return 'Draw'
				}
				else if (computer === 'Grass') {
					document.getElementById("Message").innerHTML = 'Grass Ensnared Rock Type! You Lose';
					cScore++
					updateScore(); 
				  return 'Lose'
				}else if (computer === 'Water') {
					document.getElementById("Message").innerHTML = 'Water Errodes your Rock Type! You Lose';
					cScore++
					updateScore(); 
				  return 'Lose'
				}else {
					let outcome = "was super effect against";
					document.getElementById("Message").innerHTML = player + " " + outcome + " " + computer + " " + "You Win!";
					pScore++
					updateScore(); 
					return 'Win';
				}
			  }
			
	
	};
	//Defines what the Output is
	function MessageF(playerpick, computerpick){
		
		document.getElementById("Playerlog").innerHTML = "The Player picked:" + "   " + playerpick + "<br>" 
		document.getElementById("Computerlog").innerHTML = "The Computer picked:"  +  "   " + computerpick + "<br>" 
		
	 
		
	}
	
	//Button Input from User Clicks
	Firebutton.addEventListener('click', function (e) {
		let PlayerChoice1 = "Fire";
		let result = playRound(PlayerChoice1);
		
		console.log(result);
	  });
	Waterbutton.addEventListener('click', function (e) {
		let PlayerChoice1 = "Water"
		let result = playRound(PlayerChoice1);
		console.log(result);
	  });
	Icebutton.addEventListener('click', function (e) {
		let PlayerChoice1 = "Ice"
		let result = playRound(PlayerChoice1);
		console.log(result); 
	  });
	Grassbutton.addEventListener('click', function (e) {
		let PlayerChoice1 = "Grass"
		let result = playRound(PlayerChoice1);
		console.log(result); 
	  });
	Rockbutton.addEventListener('click', function (e) {
		let PlayerChoice1 = "Rock"
		pokemonshow(PlayerChoice1);
		let result = playRound(PlayerChoice1);
		console.log(result); 
	  });
	const buttons = document.querySelectorAll('button');
	
	Firebutton.addEventListener("mouseover", function(e) {
		e.target.style.background = '#fdad5c';
		
		});
	
	Firebutton.addEventListener("mouseout", function(e) {
			e.target.style.background = '';
			
			});
	
	Waterbutton.addEventListener("mouseover", function(e) {
				e.target.style.background = '#B1D4E0';
				
				});
			
	Waterbutton.addEventListener("mouseout", function(e) {
					e.target.style.background = '';
					
					});
	Grassbutton.addEventListener("mouseover", function(e) {
				e.target.style.background = '#90ee90';
				
				});
			
	Grassbutton.addEventListener("mouseout", function(e) {
					e.target.style.background = '';
					
					});
	Icebutton.addEventListener("mouseover", function(e) {
				e.target.style.background = '#d4ebf2';
				
				});
			
	Icebutton.addEventListener("mouseout", function(e) {
					e.target.style.background = '';
					
					});
	Rockbutton.addEventListener("mouseover", function(e) {
				e.target.style.background = '#D3D3D3';
				
				});
	Rockbutton.addEventListener("mouseout", function(e) {
					e.target.style.background = '';
					
					});
	
	

	//Call all the inner Functions
	startGame();
}

//Start the game
game()



//Selects image based on user choice


//picks number between 1-4







	

