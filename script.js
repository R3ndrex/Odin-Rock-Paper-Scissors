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
    if (
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
    ) {
        return humanChoice;
    } else {
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
    switch (computerChoice) {
        case "paper":
            computerHand.src = "./images/paper.png";
            break;
        case "scissors":
            computerHand.src = "./images/scissors.png";
            break;
        default:
            computerHand.src = "./images/rock.png";
    }
    switch (humanChoice) {
        case "paper":
            humanHand.src = "./images/paper.png";
            break;
        case "scissors":
            humanHand.src = "./images/scissors.png";
            break;
        default:
            humanHand.src = "./images/rock.png";
    }
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
