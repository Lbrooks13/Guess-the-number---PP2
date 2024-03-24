const checkButton = document.querySelector(".submit");
const input = document.querySelector(".guess");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const remVal = document.querySelector(".rem-val");
const allguesses = document.querySelector(".all");
const tryAgainButton = document.querySelector(".reset");
const triesLast = document.querySelector(".tries-last");

let targetNumber;
let numberOfGuesses = 5;
let savedScoresArray = [];

//Event Listeners
document.addEventListener("DOMContentLoaded", (e) => {
    targetNumber = getRandomInt(1, 100);
    console.log(targetNumber);
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

    if (numberOfGuesses !== 1 && guess !== targetNumber) { 
        updateHint(guess, targetNumber);
    }
    else if (numberOfGuesses ===1 && guess !== targetNumber) {
        result.textContent = alert("Better luck next time!");
        tryAgainButton.hidden = false;
        checkButton.hidden = true;
    }
    else if (guess === targetNumber) {
        result.textContent = alert("Awesome! Well done!");
        tryAgainButton.hidden = false;
        checkButton.hidden = true;
        updateScores(5 - numberOfGuesses);
    }
        
    numberOfGuesses--;
    remVal.textContent = numberOfGuesses;
    allguesses.textContent += guess + ", ";
})

checkButton.addEventListener("click", (e) => {

    if (guess > 100) {
        result.textContent = alert("Please enter a number lower than 100.");
        return;
    }
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
    numberOfGuesses = 5;
    result.textContent = "";
    hint.textContent = "";
    remVal.textContent = "";
    targetNumber = getRandomInt(1, 100);
    allguesses.textContent = "";
    input.value = "";
    console.log(targetNumber);
}

function updateScores(score) {
    savedScoresArray.push(score);
    console.log(savedScoresArray);
    triesLast.textContent = savedScoresArray;

}







   