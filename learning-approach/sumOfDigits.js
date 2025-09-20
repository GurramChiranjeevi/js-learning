const lastDigit = 3;
let sumOfAll = 0;
if(lastDigit === 1){
  sumOfAll = lastDigit ;  
}

if(lastDigit === 2){
  let oneLess = lastDigit -1; 
  sumOfAll = lastDigit + oneLess;
}

if(lastDigit === 3){
  let oneLess = lastDigit -1;
  sumOfAll = lastDigit + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;

}
if(lastDigit === 4){
  let oneLess = lastDigit -1;
  sumOfAll = lastDigit + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;

}

if(lastDigit === 5){
  let oneLess = lastDigit -1;
  sumOfAll = lastDigit + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;
  oneLess--;
  sumOfAll = sumOfAll + oneLess;

}

  
console.log(" sum of until ",lastDigit, " is ", sumOfAll);
// if(lastDigit === 5){
//   sumOfAll = lastDigit +oneLess + lastDigit -2 + lastDigit -3 + lastDigit -4;  
// }
// console.log("sum of until",lastDigit," is",sumOfAll);




