const upToWhere = 5;
for(let currentNumber = 1; currentNumber <= upToWhere; currentNumber++) {
  let beforeNumber = currentNumber;
  let result = 1;
  while(beforeNumber >= 1) {
    result = result  *  beforeNumber;
    beforeNumber = beforeNumber - 1;
  }
  console.log("Factorial of",currentNumber,"is",result);
}

