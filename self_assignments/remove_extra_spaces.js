function removeExtraSpaces(string) {
  string = string.trim();
  let result = "";
  for (let index = 0; index < string.length; index++) {
    if(string[index] === " "){
     continue;
    }
    if(string[index - 1] === " "){
      result = result + " ";
    }
    result = result + string[index];
  }

  return result;
}

function testRemoveExtraSpaces(description, string, expectedOutput) {
  const actualOutput = removeExtraSpaces(string);
  const areMatched = actualOutput === expectedOutput;
  const resultIcon = areMatched ? "✅" : "❌";
  if (areMatched) {
    printPassedCases(resultIcon, description);
  } else {
    printFailedCases(resultIcon, description, string, actualOutput, expectedOutput);
  }
}

function printFailedCases(resultIcon, description, string, actualOutput, expectedOutput) {
  console.log(`${resultIcon}  ${description} 
     inputs :${string}
     actual :${actualOutput} 
     expected :${expectedOutput} `);
}

function printPassedCases(resultIcon, description) {
  console.log(resultIcon, " ", description);
}

function runAllTests() {
  testRemoveExtraSpaces("1 space bw words", "hello ", "hello");
  testRemoveExtraSpaces("2 spaces bw words", "hello  world", "hello world");
  testRemoveExtraSpaces("3 spaces bw words", "hello   world", "hello world");
  testRemoveExtraSpaces("4 spaces bw words", "hello    world", "hello world");
  testRemoveExtraSpaces("mixed no of spaces", "hello world  javascript   is    fun                  bye", "hello world javascript is fun bye");
  testRemoveExtraSpaces("no words", "   ", "");
}

function main() {
  runAllTests();
}

main();
