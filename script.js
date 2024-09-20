// console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie! Both chose " + humanChoice;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    resultDiv.textContent = "You win, rock beats scissors";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultDiv.textContent = "You win, scissors beats paper";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultDiv.textContent = "You win, paper beats rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    resultDiv.textContent = "You lose, rock beats scissors";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    resultDiv.textContent = "You lose, scissors beats paper";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    resultDiv.textContent = "You lose, paper beats rock";
    computerScore++;
  }

  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {


  if (humanScore === 5) {
    scoreDiv.textContent += " | You won!";
  } if (computerScore === 5) {
    scoreDiv.textContent += " | Game over! The Computer won the game.";
  }

  buttons.forEach((button) => {
    button.disabled = true;
  });
  container.appendChild(resetButton);
  resetButton.style.display = "block";
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  resultDiv.textContent = "";
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  buttons.forEach((button) => {
    button.disabled = false;
  });

  resetButton.style.display = "none";
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";


resetButton.addEventListener('click', resetGame)

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    playRound(button.value, computerSelection);
  });
});

const container = document.querySelector("#container");

const resultDiv = document.createElement("div");
resultDiv.id = 'resultDiv';
container.appendChild(resultDiv);

const scoreDiv = document.createElement("div");
scoreDiv.id = 'scoreDiv';
container.appendChild(scoreDiv);

