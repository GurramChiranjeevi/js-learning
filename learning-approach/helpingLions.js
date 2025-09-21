const testCase1 = "ZL";
const testCase2 = "Z L";
const testCase3 = "L  ZL Z";
const testCase4 = "L     Z";
const testCase5 = "Z     Z ";
const testCase6 = "L     L";
const testCase7 = "Z Z Z";
const testCase8 ="L ZL Z"
const testCase9 = "Z   LL Z"
const testCase10 ="  L  ZL"
const testCase11 ="Z   L Z  L L";
const testCase12 = " ";

const testCaseToUse = testCase12 ;

let distanceTOHunt = testCaseToUse.length;
let difference = testCaseToUse.length;
let zebraPosition=0;
let lionPosition=0;
let zebraChecked = 0;
let lionChecked = 0;
for(let i = 0;i < testCaseToUse.length; i++){

  if(testCaseToUse[i] === " "){
    continue;
  }

  if(testCaseToUse[i]=== "Z"){
    zebraPosition = i;
    zebraChecked++;
  }

  if(testCaseToUse[i] === "L"){
    lionPosition = i;
    lionChecked++;
  }
    
  if( zebraChecked > 0 && lionChecked > 0) {

    difference = (zebraPosition < lionPosition)? lionPosition - zebraPosition : zebraPosition - lionPosition ;
    if(difference < distanceTOHunt) {
      distanceTOHunt = difference ; 
    }
  }
}
if(zebraChecked >= 1 && lionChecked >= 1) {
  console.log("testCaseToUse: ", testCaseToUse, "Output: ", distanceTOHunt - 1);
}else {
  console.log("testCaseToUse: ", testCaseToUse, "Output: ",-1);
}






