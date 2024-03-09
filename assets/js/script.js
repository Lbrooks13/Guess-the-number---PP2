document.addEventListener("DOMContentLoaded")

let nbguess =5;
const value =78;
const button = document.querySelector(".submit");
const input = document.querySelector(".guess");
const hint = document.querySelector(".hint");
const result = document.querySelector(".result");
const remVal = document.querySelector(".rem-val");
const allguesses = document.querySelector(".all");


    function updateHint(guess, value) {
        if (guess < value) hint.textContent = "Hint : Higher";
        else hint.textContent = "Hint : Lower";
        input.value = "";
    }

    button.addEventListener("click", (e) => {
        e.preventDefault ();
        const guess = parseInt (input.value, 10);
        if (nbGuess !== 1 && guess !== value) updateHint (guess);
        else if (nbGuess ===1 && guess !== value) {
            result.textContent = "Better luck next time!";
            result.computedStyleMap.color = "red";
            button.disabled = true;
            button.computedStyleMap.background = "grey";
        }
        nbGuess --;
        remVal.textContent = nbGuess;
        allguesses.textContent += `${guess ? guess = ", " : ""};
    }