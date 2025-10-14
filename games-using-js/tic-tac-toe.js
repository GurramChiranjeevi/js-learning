let grid = [["   ", "   ", "   "], ["   ", "   ", "   "], ["   ", "   ", "   "]];
const filledPositions = [];

const users = [];
function isEven(x) {
  return x % 2 === 0;
}

function getRow(number) {
  return grid[number].join().replaceAll(',', '|');
}

function printGrid() {
  let line = 0;
  for (let i = 1; i <= 7; i++) {
    if (isEven(i)) {
      console.log(getRow(line++));
    } else {
      console.log("-".repeat(15));
    }
  }
}

function isValidPosition(position) {
  const x = isValidInput(parseInt(position[0]));
  const y = isValidInput(parseInt(position[1]));
  return x && y;
}

function isValidInput(input) {
  if (typeof (input) !== "number" || isNaN(input)) {
    return false;
  }
  if (input > 2 || input < 0) {
    return false;
  }
  return true;
} 

function isWinningPosition(grid, symbol) {
  const areHorizontalMatched = (grid[0][0] === symbol && grid[0][1] === symbol && grid[0][2] === symbol) ||
  (grid[1][0] === symbol && grid[1][1] === symbol && grid[1][2] === symbol) ||
  (grid[2][0] === symbol && grid[2][1] === symbol && grid[2][2] === symbol);

  const areVerticalMatched = (grid[0][0] === symbol && grid[1][0] === symbol && grid[2][0] === symbol) ||
  (grid[0][1] === symbol && grid[1][1] === symbol && grid[2][1] === symbol) ||
  (grid[0][2] === symbol && grid[1][2] === symbol && grid[2][2] === symbol);

  const areDiagonalsMatched = (grid[0][0] === symbol && grid[1][1] === symbol && grid[2][2] === symbol) ||
  (grid[0][2] === symbol && grid[1][1] === symbol && grid[2][0] === symbol);

  return areDiagonalsMatched || areHorizontalMatched || areVerticalMatched;
}

function askPosition(startIndex = 0, users) {
  for (let i = startIndex; i < 9; i++) {
    const position = prompt(`${users[i % 2]} enter position (00 - 22):`);
    if(!isValidPosition(position)) {
      console.log("enter valid position");
      return askPosition(i, users);
    }
    if(filledPositions.includes(position)) {
      console.log(position, "already filled ‼️");
      return askPosition(i, users);
    }
    filledPositions.push(position);
    const symbol = (isEven(i)) ? ' ✅ ' : ' ❌ ';
    grid[position[0]][position[1]] = symbol;
    console.clear();
    printGrid();
    if(isWinningPosition(grid, symbol)) {
      console.log(users[i % 2],"you won!!🏆 🏆🏆 🏆🏆 🏆🏆 🏆");
      return;
    }
  }
  console.log("Draw match !! 🙂");
}

function logIn() {
  const userName1 = prompt("enter user name 1 :");
  const userName2 = prompt("enter user name 2 :");
  users.push(userName1);
  users.push(userName2);
  printGrid();
  askPosition(0, users);
}
logIn();

