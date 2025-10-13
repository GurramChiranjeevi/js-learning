function generateNumber(maxNumber) {
  return Math.floor((Math.random() * maxNumber)) + 1;
}

function welcomeMessage() {
  console.log(`let's play rock, paper & scissors game \n1 => ROCK 🪨\n2 => PAPER 📝\n3 => SCISSORS ✂️`);
}

function generateChoice(valueGenerated) {
  switch (valueGenerated) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

function isValidInput(input) {
  if (typeof (input) !== "number") {
    console.log("you have to select only numbers");
    return false;
  }
  if (input > 3 || input < 1) {
    console.log("select numbers from 1 to 3");
    return false;
  }
  return true;
} 

function printChoices(userChoice, opponentChoice) {
  console.log("You selected :", userChoice);
  console.log("opponent selected :", opponentChoice);
}

function winMessage(opponentChoice, userChoice) {
  console.log("Result :Hurrayyy!, you won 🎉");
  printChoices(userChoice, opponentChoice);
}

function lostMessage(opponentChoice, userChoice) {
  console.log("you lost 👎");
  printChoices(userChoice, opponentChoice);
}

function playAgain() {
  const yesOrNo = confirm("Do you want to play again ?");
  console.clear();
  if (yesOrNo) {
    return playRockPaper();
  }
  return;
}

function decideGame(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("Result :Draw match 🙂");
    console.log("coz opponent also selected the same!");
    return;
  }
  if ((userChoice === "ROCK" && computerChoice === "PAPER") || 
  (userChoice === "PAPER" && computerChoice === "SCISSORS") || 
  (userChoice === "SCISSORS" && computerChoice === "ROCK")) {
    lostMessage(computerChoice, userChoice);
    return;
  }
  winMessage(computerChoice, userChoice);
}

function playRockPaper() {
  const computerInput = generateNumber(3);
  const computerChoice = generateChoice(computerInput);

  const userInput = parseInt(prompt("select any one number :"));
  if (isValidInput(userInput)) {
    const userChoice = generateChoice(userInput);
    decideGame(userChoice, computerChoice);
  }
  return playAgain();
}

function goodByeMessage() {
  console.log("ok take care, good bye👋");
}

welcomeMessage();
playRockPaper();
goodByeMessage();
