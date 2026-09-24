let targetNumber = parseInt(Math.random() * 100 + 1)
console.log(targetNumber)
const userInput = document.querySelector("#Guessfield")
const submit = document.querySelector(".inputform")
const startover = document.querySelector(".result")
const feedback = document.querySelector("#loworhigh")
const prevnumguess = document.querySelector(".firstresult")
const remaining = document.querySelector(".lastresult")
const newGame = document.querySelector("#newGame")
let userGuesses = []
let attempts = 0;
let gameOver = true;

if (gameOver) {
    submit.addEventListener("submit", (e) => {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        ValidateGuess(guess)
    })
}
function ValidateGuess(guess) {
    if (isNaN(guess)) {
        alert("Enter a valid number")
    }

    else if (guess < 1) {
        alert("Enter Number Greater than or equal to 1 ")
    }

    else if (guess > 100) {
        alert("Enter Number Smaller than 100 ")
    }

    else {
        userGuesses.push(guess)
        if (attempts === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! Your Random Number was ${randomNumber}`)
            endGame()
        }

        else {
            displayGuess(guess);
            console.log(guess);
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    if (guess === targetNumber) {
        displayMessage(`Yeah! You Guessed it Correctly`)
        endGame()
    }
    else if (guess > targetNumber) {
        displayMessage(`Guessed Number is too high`)
    }
    else if (guess < targetNumber) {
        displayMessage(`Guessed Number is too low`)
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevnumguess.innerHTML += `${guess} , `
    attempts++
    remaining.innerHTML = `${11 - attempts}`

}

function displayMessage(message) {
    feedback.innerHTML = `${message}`

}
function endGame() {
    userInput.setAttribute("disabled", "")
    newGame.style.display = "flex"
    gameOver = false
    startGame()
}

function startGame() {
    newGame.addEventListener("click", () => {
        userInput.removeAttribute("disabled")
        feedback.innerHTML = ``;
        attempts = 1
        userGuesses = []
        remaining.innerHTML = `${11-attempts}`
        prevnumguess.innerHTML = ``
        newGame.style.display = "none"
        targetNumber = parseInt(Math.random() * 100 + 1)
        gameOver = true
    })

}
