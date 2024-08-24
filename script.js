let humanScore = 0;
let computerScore = 0;
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
function getHumanChoice(humanInput) {
    let humanChoice = humanInput.toLowerCase().trim();
    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
        default:
            throw new TypeError("There is no signal like this.");
    }
}
function playRound(humanInput) {
    let humanChoice = getHumanChoice(humanInput);
    let computerChoice = getComputerChoice();
    animateHands(humanChoice, computerChoice);
    if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        return "You lost!";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        humanScore++;
        return "You won!";
    }
    return "It's a draw!";
}
function animateHands(humanChoice, computerChoice) {
    let humanHand = document.querySelector(".human-hand");
    let computerHand = document.querySelector(".computer-hand");
    computerHand.src = `./images/${computerChoice}.png`;
    humanHand.src = `./images/${humanChoice}.png`;
}
function ChangeRound() {
    let inputField = document.querySelector(".human-input");
    let roundInfo = document.querySelector(".round-info");
    let humanChoice = inputField.value;
    roundInfo.textContent = playRound(humanChoice);
    inputField.value = "";
    document.querySelector(
        ".human-text"
    ).innerHTML = `Your score: <strong>${humanScore}</strong>`;
    document.querySelector(
        ".computer-text"
    ).innerHTML = `Computer score: <strong>${computerScore}</strong>`;
}
document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".confirm-button");
    let inputField = document.querySelector(".human-input");
    button.addEventListener("click", ChangeRound);
    inputField.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            ChangeRound();
        }
    });
});
