/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 * Programmed By Brian Kidd*/
class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}
	/** * Creates phrases for use in game 
	 * @return {array} An array of phrases that could be used in the game
	 */
	createPhrases() {
		let phrases = [{
			phrase: "a bird in the hand is worth two in the bush",
		}, {
			phrase: "six of one half a dozen of the other",
		}, {
			phrase: "no good deed goes unpunished",
		}, {
			phrase: "all publicity is good publicity",
		}, {
			phrase: "failing to plan is planning to fail",
		}];
		return phrases;
	}
	/** 
	* Selects random phrase from phrases property 
	* @return {Object} Phrase object chosen to be used 
	*/
	getRandomPhrase() {
		let randomPhrase = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomPhrase].phrase;
	}
	/**
	* Begins game by selecting a random phrase and displaying it to user 
	*/ 
	startGame() {
		let displayedPhrase = this.getRandomPhrase();
		this.activePhrase = new Phrase(displayedPhrase);
		this.activePhrase.addPhraseToDisplay(); 
		document.getElementById("overlay").style.display = "none";
		const introAudio = new Audio('http://www.briankiddmedia.com/sounds/simonIntroTones.mp3');
		introAudio.play();
	}
	/** 
	* Checks for winning move 
	* @return {boolean} True if game has been won, false if game wasn't won
	*/
	  checkForWin() {
		let gameOver = true;	
		let hiddenLetter = document.getElementsByClassName("hide letter");
		for(let i = 0; i < hiddenLetter.length; i+=1){
			if (hiddenLetter !== null){
			  gameOver = false;
			}
		}
		return gameOver;
	 } 

	 /** 
	 * Increases the value of the missed property 
	 * Removes a life from the scoreboard * Checks if player has remaining lives and ends game if player is out 
	*/
	removeLife(){
	  this.missed++;
	  let hearts = document.querySelectorAll('.tries');
	   for(let i = 0; i < this.missed; i++ )
	  {
		hearts[i].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';

	  } 
	  if(this.missed === 5)
	  {
	  this.gameOver(false);
	  this.missed = 0;
	  }

	}	
	/**
	* Displays game over message 
	* @param {boolean} gameWon - Whether or not the user won the game 
	*/
	 gameOver(gameWon){
		  const overlay = document.getElementById('overlay');
		  document.getElementById("btn__reset").style.display = "block";
		  overlay.style.display = 'flex';
		  const gameOverMessage = document.getElementById("game-over-message");
		  const winningPhrase = document.createElement("h1");
		  winningPhrase.setAttribute("id", "winningPhrase");
		  overlay.appendChild(winningPhrase);
		  const correctPhrase = document.getElementById("winningPhrase");
		  

		  if(gameWon)
		  {
			gameOverMessage.innerHTML = "You Won! Click start game to try another phrase";
			correctPhrase.innerHTML = "Your phrase was: " + this.activePhrase.phrase.toUpperCase();
			

		  }
		  else
		  {
			gameOverMessage.textContent = "You did not guees the phrase. Try another one";
			correctPhrase.innerHTML = " ";
			
		  }
		  this.resetGame();
	} 
	/** 
	* Handles onscreen keyboard button clicks 
	* @param (HTMLButtonElement) button - The clicked button element 
	*/
	 handleInteraction(button){
		if(this.activePhrase.checkLetter(button.textContent)){
			this.activePhrase.showMatchedLetter(button.textContent);
			button.className = 'chosen';
			button.disabled = true;
		if(this.checkForWin())
		{
			this.gameOver(true);
		}
		  }
		else {
			if(button.textContent !== "Start Game"){
			button.className = "wrong";
			button.disabled = true;
			this.removeLife();
		}
	}
} 
/*resets gameboard to its original state by placing the original classes back, enabling buttons
adding the hearst back to the game, resetting the this.missed score erasing the previous phrase */
	resetGame(){
	  let buttons = document.querySelectorAll('BUTTON');
	  let chars = document.querySelectorAll('li');
	  let hearts = document.querySelectorAll('.tries');
	  const ul = document.querySelector('ul');
	  buttons.forEach(button =>
		{
		button.className = 'key';
		button.disabled = false;
		})

	  hearts.forEach(heart => heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">')
	  this.missed = 0;
		document.querySelector("#phrase ul").innerHTML = " ";
		/*jQuery fadeIn animation upon reset*/
		$(document).ready(function() {
			$(".title").hide().fadeIn(5000);
		});
		//resets the chosen array for the keydown event listener
		chosen = [];
	  }
}