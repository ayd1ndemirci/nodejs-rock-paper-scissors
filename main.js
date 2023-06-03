const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getWinner(userChoice, botChoice) {
  if (userChoice === botChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lost!";
  }
}

function playGame(userChoice) {
  const lowerUserChoice = userChoice.toLowerCase();

  if (!options.includes(lowerUserChoice)) {
    console.log("Invalid choice! Please enter either rock, paper, or scissors.");
    rl.question(`Enter your choice (${options.join(", ")}): `, playGame);
    return;
  }

  const botChoice = getRandomChoice();
  const result = getWinner(lowerUserChoice, botChoice);

  console.log("Your choice: ", lowerUserChoice);
  console.log("Bot's choice: ", botChoice);
  console.log("Result: ", result);
  rl.close();
}

rl.question(`Enter your choice (${options.join(", ")}): `, playGame);
