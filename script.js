let humanScore = 0;
let computerScore = 0;

const roundInfo = document.querySelector(".round-info");
const buttons = document.querySelectorAll(".button-container > *");
const humanHand = document.querySelector(".human-hand");
const computerHand = document.querySelector(".computer-hand");
const humanText = document.querySelector(".human-text");
const computerText = document.querySelector(".computer-text");
const popup = document.querySelector(".popup-container");
const popupH = document.querySelector(".popup-header");
const popupParagraph = document.querySelector(".popup-paragraph");
const popupButton = document.querySelector(".popup-button");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}

function animateHands(humanChoice, computerChoice) {
    humanHand.src = `./images/${humanChoice}.png`;
    computerHand.src = `./images/${computerChoice}.png`;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    animateHands(humanChoice, computerChoice);
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        return "You lost!";
    }
    humanScore++;
    return "You won!";
}

function updateRound(humanChoice) {
    roundInfo.textContent = playRound(humanChoice);
    humanText.textContent = `Your score: ${humanScore}`;
    computerText.textContent = `Computer score: ${computerScore}`;
    checkEndGame();
}

function checkEndGame() {
    if (computerScore >= 5 || humanScore >= 5) {
        popup.classList.add("active");
        if (computerScore > humanScore) {
            popupH.textContent = "You lost!";
        }
        popupParagraph.innerHTML = `Your score: ${humanScore}. Computer score: ${computerScore}.<br /><strong>Wanna try again?</strong>`;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        updateRound(button.className);
    });
});

popupButton.addEventListener("click", () => location.reload());
