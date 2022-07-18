/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Comment 


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("No hay mal que por bien no venga"),
            new Phrase("Al mal tiempo buena cara"),
            new Phrase("Querer es poder"),
            new Phrase(" Preguntando se llega a Roma"),
            new Phrase("El que busca encuentra")
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    startGame() {
        let overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll(".hide");
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }


    gameOver(gameWon) {
        const overlayGamePage = document.querySelector("#overlay")
        overlayGamePage.style.display = "flex";
        if (gameWon === true) {
            document.querySelector("#game-over-message").textContent = "Congratulations, you have won the game!";
            overlayGamePage.className = ("win");
        } else {
            document.querySelector("#game-over-message").textContent = "Sorry, better luck next time!";
            overlayGamePage.className = ("lose");
        }
        this.resetGame();
    }


    //Method checks to see if letter selected matches a letter/s in the phase. 

    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.innerHTML)) { // innerHTML?
            this.activePhrase.showMatchedLetter(button.innerHTML);
            button.classList.add('chosen');
            if (this.checkForWin() === true) {
                this.gameOver(true);
            };
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
    removeLife() {
        lives[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed >= 5) {
            this.gameOver();
        }
    }


    resetGame() {
        ul.innerHTML = '';
        keyboardKeys.forEach(button => {
            button.classList.remove('wrong');
            button.classList.remove('chosen');
            button.removeAttribute('disabled');
        })
        lives.forEach(lives => {
            lives.src = "images/liveHeart.png"; //src
        })
    }
}    