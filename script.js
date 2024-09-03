// console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
getComputerChoice();
// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  const normalizedChoice = humanChoice.toLowerCase();
  if (
    normalizedChoice === "rock" ||
    normalizedChoice === "scissors" ||
    normalizedChoice === "paper"
  ) {
    return normalizedChoice;
  }
  return "invalid choice please enter rock, scissors or paper";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("the same choice");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win, rock beats scissors");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win, scissors beats paper");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win, paper beats rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose, rock beats scissors");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose, scissors beats paper");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose, paper beats rock");
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log("the same score");
  } else if (humanScore > computerScore) {
    console.log("You win the round!");
  } else if (humanScore < computerScore) {
    console.log("You lose the round!");
  }
}

playGame();
