const givenString = "hello" ;
let givenStringLength = 0 ;
let lengthCounter = 0;

while(true) {
  lengthCounter = lengthCounter + 1;
  if(givenString[lengthCounter] === undefined) {
    break;
  }

}
givenStringLength = lengthCounter ;
console.log("length of ",givenString," is",givenStringLength);
