const lastDigit = 5;
let sumOfAll = 0;
let oneLess ;

oneLess = lastDigit ;
while( true) {
  sumOfAll = sumOfAll + oneLess;
  oneLess -- ; 
  if ( oneLess === 0){
    break;
  }
}
console.log(" sum of until ",lastDigit, " is ", sumOfAll);
