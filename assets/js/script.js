let value;

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
  



document.addEventListener("DOMContentLoaded", (e) => {
    value = getRandomInt(1, 100);
    console.log(value);
})

console.log(value);

let nbGuess = 5;


const button = document.querySelector(".submit");
const input = document.querySelector(".guess");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const remVal = document.querySelector(".rem-val");
const allguesses = document.querySelector(".all");


    function updateHint(guess, value) {
        if (guess < value) {
            hint.textContent = "Hint : Higher";
        }
        else {
            hint.textContent = "Hint : Lower";
        }
        input.value = "";
    }


   
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const guess = parseInt (input.value, 10);

        if (nbGuess !== 1 && guess !== value) { 
            updateHint(guess, value);
        }
        else if (nbGuess ===1 && guess !== value) {
            result.textContent = "Better luck next time!";

            button.disabled = true;
        }
        else if (guess === value) {
            result.textContent = "Well done, mate."
        }
        
        nbGuess--;
        remVal.textContent = nbGuess;
        //allguesses.textContent += `${guess ? guess = ", " : ""};
        allguesses.textContent += guess + ", ";
    })