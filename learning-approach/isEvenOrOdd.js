const givenNumber = 8;
let table = 2;
let answer = 0;
let evenOrOdd ;
let even = false;
for(let number = 1;answer <= givenNumber; number ++) {
  answer = table * number;
  if (answer === givenNumber) {
    even = true;
  }
}
evenOrOdd = even ? "even": "odd";
console.log(givenNumber,"is",evenOrOdd);
