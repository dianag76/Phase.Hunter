//Declare all variables
const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName("letter");

    class Phrase {
        constructor(phrase){
            this.phrase = phrase.toLowerCase();
        }
    
    // Class will have three methods to for game to work
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === " ") {
                let li = document.createElement("li");
                li.setAttribute("class", "space");//why is this needed?
                let letter = document.createTextNode(" ");
                li.appendChild(letter);
                addPhrase.firstElementChild.appendChild(li);
            } else {
                let li = document.createElement("li");
                li.setAttribute("class", `hide letter ${this.phrase[i]}`);
                let letter = document.createTextNode(`${this.phrase[i]}`);
                li.appendChild(letter);
                addPhrase.firstElementChild.appendChild(li);
            }
        }
    }

    // Method created check for letter in the phase
    checkLetter(letter) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (letter === this.phrase[i]) {
                this.showMatchedLetter(this.phrase[i]);
                return true;
            }
        }
    }

    //If selected letter is in phase, use showMatchedletter to reveal and inform player.
    showMatchedLetter(matchedLetter) {
        for (let i = 0; i < phraseTitle.length; i++) {
            if (phraseTitle[i].innerHTML === matchedLetter) {
                phraseTitle[i].className = `show letter ${matchedLetter}`;
            }
        }
    }
}