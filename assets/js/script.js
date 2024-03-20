const checkButton = document.querySelector(".submit");
const input = document.querySelector(".guess");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const remVal = document.querySelector(".rem-val");
const allguesses = document.querySelector(".all");
const tryAgainButton = document.querySelector(".reset");
const triesLast = document.querySelector(".tries-last");

let value;
let nbGuess = 5;
let scores = [];



//Event Listeners
document.addEventListener("DOMContentLoaded", (e) => {
    value = getRandomInt(1, 100);
    console.log(value);
})

tryAgainButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkButton.hidden = false;
    tryAgainButton.hidden = true;
    resetGame();
})




checkButton.addEventListener("click", (e) => {
    e.preventDefault();
    result.textContent ="";

    if (!input.value) {
        result.textContent = alert("Please enter a number.");
        return;
    
    }

    const guess = parseInt(input.value, 10);

    if (nbGuess !== 1 && guess !== value) { 
        updateHint(guess, value);
    }
    else if (nbGuess ===1 && guess !== value) {
        result.textContent = alert("Better luck next time!");
        tryAgainButton.hidden = false;
        checkButton.hidden = true;
    }
    else if (guess === value) {
        result.textContent = alert("Well done, mate.");
        tryAgainButton.hidden = false;
        checkButton.hidden = true;
        updateScores(5 - nbGuess);
    }
    
    nbGuess--;
    remVal.textContent = nbGuess;
    allguesses.textContent += guess + ", ";
})





// Functions

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
  


function updateHint(guess, value) {
    if (guess < value) {
        hint.textContent = "Hint : Higher";
    }
    else {
        hint.textContent = "Hint : Lower";
    }
    input.value = "";
}


function resetGame() {
    nbGuess = 5;
    result.textContent = "";
    hint.textContent = "";
    remVal.textContent = "";
    value = getRandomInt(1, 100);
    allguesses.textContent = "";
    input.value = "";
    console.log(value);
}

function updateScores(score) {
    scores.push(score);
    console.log(scores);
    triesLast.textContent = scores;

}







   