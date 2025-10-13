let totalBalance = 10000;

function welcomeMessage() {
  console.log("Play Kay Raja Kaii\nwin unlimited cash 🤑");
  console.log("every play you're going to win 2x cash");
}

function generateNumber(maxNumber) {
  return Math.floor((Math.random() * maxNumber)) + 1;
}

function accountBalance() {
  console.log("\t\t\t\t\t\t\t\tAccount Balance :", totalBalance);
}

function isValidInput(input) {
  if (input <= 6 && input >= 1) {
    return true;
  }
  console.log("you have to give only numbers and");
  console.log("select numbers from 1 to 6");
  askPlayAgain();
  return false;
} 

function goodByeMessage() {
  accountBalance();
  console.log("save money for next time, good bye👋");
}

function askPlayAgain() {
  const yesOrNo = confirm("Do you want to play again ?");
  console.clear();
  if(yesOrNo) {
    return kayRajaKay();
  }
  goodByeMessage();
}

function wonMessage(betMoney) {
  console.log("you won 🎉", betMoney);
  totalBalance = totalBalance + betMoney;
  askPlayAgain();
}

function lostMessage(betMoney) {
  console.log("you lost 😞 your rs.", betMoney);
  totalBalance = totalBalance - betMoney;
  askPlayAgain();
}

function askBetMoney() {
  if(totalBalance === 0) {
    console.log("you don't have enough balance to bet")
    goodByeMessage();
  }
  const betMoney = parseInt(prompt("How much are you going to bet (in Rs):"));
  if(betMoney > 0 && betMoney <= totalBalance ) {
    return betMoney;
  }
  console.log("bet valid amount of cash ");
  return askBetMoney();
}

function kayRajaKay() {
  accountBalance();
  const rollDice = generateNumber(6);
  const userChoice = parseInt(prompt("select any number :"));
  if (!isValidInput(userChoice)) {
    return;
  }
  const betMoney = askBetMoney();
  if(rollDice === userChoice) {
    wonMessage(betMoney);
  } else {
    lostMessage(betMoney);
  }
}

welcomeMessage();
kayRajaKay();


