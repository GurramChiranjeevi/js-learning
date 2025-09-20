const noOfFibonacciTerms = 11;
let firstTerm = 0;
let secondTerm = 1;
let fibonacciSeries = 0 ;
let fibonacciTermsHave = 0;

console.log("fibonacci for ",noOfFibonacciTerms," is :", firstTerm);
fibonacciTermsHave ++ ;


while(fibonacciTermsHave < noOfFibonacciTerms){
  firstTerm = secondTerm;
  secondTerm = fibonacciSeries;
  fibonacciSeries = firstTerm + secondTerm ;
  console.log(fibonacciSeries);
  fibonacciTermsHave ++;
}
