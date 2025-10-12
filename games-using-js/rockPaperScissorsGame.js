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

function winMessage(opponentChoice) {
  console.log("opponent selected", opponentChoice);
  console.log("Result :Hurrayyy!, you won 🎉");
}

function lostMessage(opponentChoice) {
  console.log("opponent selected", opponentChoice);
  console.log("Result : you lost 👎");
}

function playAgain() {
  const yesOrNo = confirm("Do you want to play again ?");
  if (yesOrNo) {
    console.clear();
    return playRockPaper();
  }
  return;
}

function decideGame(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("Result :Draw");
    console.log("coz opponent also selected the same!");
  }
  else if (userChoice === "ROCK" && computerChoice === "PAPER") {
    lostMessage(computerChoice);
  } else if (userChoice === "PAPER" && computerChoice === "SCISSORS") {
    lostMessage(computerChoice);
  } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
    winMessage(computerChoice);
  } else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
    winMessage(computerChoice);
  } else if (userChoice === "PAPER" && computerChoice === "ROCK") {
    winMessage(computerChoice);
  } else if (userChoice === "SCISSORS" && computerChoice === "ROCK") {
    lostMessage(computerChoice);
  }
}

function playRockPaper() {
  console.log(`let's play rock, paper & scissors game \n1)ROCK 🪨\n2)PAPER 📝\n3)SCISSORS ✂️`);
  const computerInput = Math.floor((Math.random() * 3)) + 1;
  const computerChoice = generateChoice(computerInput);

  const userInput = parseInt(prompt("select any one number :"));
  if (isValidInput(userInput)) {
    const userChoice = generateChoice(userInput);
    decideGame(userChoice, computerChoice);
  }
  return playAgain();
}

playRockPaper();
