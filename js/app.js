/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const lives = document.querySelectorAll(".tries img");
const ul = document.querySelectorAll("phrase").firstElementChild;
const startGameButton = document.getElementById("btn__reset");
let game;

// A new game to be created when start button is clicked and display elements will show 
startGameButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

const keyboardKeys = document.querySelectorAll('.key');

keyboardKeys.forEach(button => {
    button.addEventListener('click', () => {
        game.handleInteraction(button)
    }
    )
})