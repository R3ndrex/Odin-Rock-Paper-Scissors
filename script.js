let humanScore = 0;
let computerScore = 0;
const enterKey = "Enter";
const inputField = document.querySelector(".human-input");
const roundInfo = document.querySelector(".round-info");
const button = document.querySelector(".confirm-button");

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

function animateHands(humanChoice, computerChoice) {
    document.querySelector(".human-hand").src = `./images/${humanChoice}.png`;
    document.querySelector(
        ".computer-hand"
    ).src = `./images/${computerChoice}.png`;
}

function ChangeRound() {
    let humanChoice = inputField.value;
    roundInfo.textContent = playRound(humanChoice);
    inputField.value = "";
    document.querySelector(
        ".human-text"
    ).textContent = `Your score: ${humanScore}`;
    document.querySelector(
        ".computer-text"
    ).textContent = `Computer score: ${computerScore}`;
}

button.addEventListener("click", ChangeRound);
inputField.addEventListener("keyup", (e) => {
    if (e.key === enterKey) {
        ChangeRound();
    }
});
