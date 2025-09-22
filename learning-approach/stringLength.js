const givenString = "hello world" ;
let givenStringLength = 0 ;
let lengthCounter = 0;

while(givenString[lengthCounter] !== undefined)  {
  lengthCounter = lengthCounter + 1;
}
givenStringLength = lengthCounter ;
console.log("length of ",givenString," is",givenStringLength);
