/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Programmed By Brian Kidd*/
class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}
	/** 
	 * Display phrase on game board 
	 */
	addPhraseToDisplay() {
		let newPhrase = document.getElementById("phrase").getElementsByTagName('ul')[0];
		for (let i = 0; i < this.phrase.length; i += 1) {
			let myNewListItem = document.createElement('li');
			let letter = this.phrase[i];
			if (letter === ' ') {
				myNewListItem.className = `space`;
			} else {
				myNewListItem.className = `hide letter ${letter}`;
			}
			myNewListItem.textContent = letter;
			newPhrase.appendChild(myNewListItem);
		}
	}
	/** 
	 * Checks if passed letter is in phrase 
	 * @param (string) letter - Letter to check 
	 */
	checkLetter(letter) {
		const splitPhrase = this.phrase.split('');
		if (splitPhrase.includes(letter)) {
			return true;
		} else {
			return false;
		}
	}
	/** * Displays passed letter on screen after a match is found 
	 * @param (string) letter - Letter to display 
	 */
	showMatchedLetter(letter) {
		const phraseCharacters = document.querySelectorAll('li');
		phraseCharacters.forEach(phraseChar => {
			if (phraseChar.textContent === letter) {
				phraseChar.className = "show letter";
			}
		});
	}
}