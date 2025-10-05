function cleanUpSentence(string, charToRemove) {
  string = string.trim();
  let charRemovedSentence = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] === charToRemove && string[index - 1] === charToRemove) {
      continue;
    }
    charRemovedSentence = charRemovedSentence + string[index];
  }
  return charRemovedSentence;
}

function callCleanUpSentence(string, charactersToRemove) {
  let result = string;
  for (let charIndex = 0; charIndex < charactersToRemove.length; charIndex++) {
    result = cleanUpSentence(result, charactersToRemove[charIndex]);
  }
  return result;
}

function testCleanUpSentence(description, string, expectedOutput) {
  const actualOutput = callCleanUpSentence(string, ".,!? ");
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
  testCleanUpSentence("2 dots in  words", "hello..world", "hello.world");
  testCleanUpSentence("1 dot in sentence", "hello.world", "hello.world");
  testCleanUpSentence("1 question mark in sentence", "hello?", "hello?");
  testCleanUpSentence("2 question mark in sentence", "hello??world", "hello?world");
  testCleanUpSentence("mixed punctuation", "hello ? . ,,! ! world", "hello ? . ,! ! world");
  testCleanUpSentence("mixed punctuationn", "java  ,, .. ?? !! script", "java , . ? ! script");
  testCleanUpSentence("empty string", " ", "");
  testCleanUpSentence("breaking test cases", "hello!!??world", "hello!?world");
  testCleanUpSentence("breaking test case 2", "Hi  !!  there  ??", "Hi ! there ?");
  testCleanUpSentence("breaking test case 3", "Hello  ! ! !  World", "Hello ! ! ! World");
}

function main() {
  runAllTests();
}

main();
