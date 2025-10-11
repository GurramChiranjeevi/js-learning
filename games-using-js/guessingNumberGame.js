function generateNumber() {
  return Math.floor(Math.random() * 100);
}

function selectChoice() {
  const choice = confirm("do you want to play again :")
  console.clear();
  if(choice){
    play();
  } else {
    console.log("ok take care, good bye👋");
  }
}

function lostMessage(number) {
  console.log("you lost bro 😆");
  console.log("the number was", number);
  return selectChoice();
}

function wonMessage(){
  console.log("you win🏆!");
  return selectChoice();
}

function hintMessage(number, guessedNumber) {
  if(guessedNumber > number) {
    console.log("\nyou're guess was too high");
  } else {
    console.log("\nyou're guess was too low");
  }
  return;
}

function playGuesingNumber(number, chances = 4) {
  const guessedNumber = parseInt(prompt("guess the number :"));
  if(number === guessedNumber) {
    return wonMessage();
  }
  if(chances === 0) {
    return lostMessage(number);
  }
  hintMessage(number, guessedNumber);
  playGuesingNumber(number, chances - 1);
}

function play() {
  playGuesingNumber(generateNumber());
}

function welcomeMessage() {
  console.log("Hello 🫶\nHave fun with guessing game");
  console.log(`guess the number between 1 - 100 digits
  You have total 5 chances`);
}
welcomeMessage();
play();
