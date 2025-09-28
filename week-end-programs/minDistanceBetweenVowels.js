function distanceBetweenVowels(string) {
  const stringLength = string.length;
  let minimumDifference = stringLength;
  
  for (let index = 0; index < stringLength; index++) {
    const firstVowelIndex = vowelIndex(string, index);
    const secondVowelIndex =vowelIndex(string, firstVowelIndex + 1);
    const difference = secondVowelIndex - firstVowelIndex;
    if (difference < minimumDifference) {
      minimumDifference = difference;
    }   
  }

  return (minimumDifference === stringLength) ? -1 : minimumDifference;
}

function vowelIndex(string, givenIndex) {
  for (let index = givenIndex; index < string.length; index++) {
    if (string[index] === "a" || string[index] === "e"|| string[index] === "i" || string[index] === "o" || string[index] === "u") {
      return index;
    }
  }
}

function testDistanceBetweenVowels(string, expectedDistance) {
  const actualDistance = distanceBetweenVowels(string);
  const resultIcon = (actualDistance === expectedDistance) ? "✅" : "❌";
  printTestResult(resultIcon, actualDistance, expectedDistance);
}

function printTestResult(resultIcon, actualDistance, expectedDistance) {
  console.log(resultIcon,string, "[actual :", actualDistance,"--> expected:",expectedDistance,"]");
}

function runAllTests() {
  testDistanceBetweenVowels("chiru", 2);
  testDistanceBetweenVowels("hello", 3);
  testDistanceBetweenVowels("helloworld", 2);
  testDistanceBetweenVowels("sivajisai", 1);
  testDistanceBetweenVowels("apple", 4);
  testDistanceBetweenVowels("beautiful", 1);
  testDistanceBetweenVowels("strengta", 4);
  testDistanceBetweenVowels("abysa", 4);
  testDistanceBetweenVowels("abyss", -1)
  testDistanceBetweenVowels("strength", -1)
  testDistanceBetweenVowels("abcdfgebcdfibcdobcubaa", 1);
  testDistanceBetweenVowels("queue", 1);
  testDistanceBetweenVowels("aeiou", 1);
  testDistanceBetweenVowels("sky", -1);
  testDistanceBetweenVowels("education", 1);
  testDistanceBetweenVowels("a", -1);
  testDistanceBetweenVowels("banana", 2);
  testDistanceBetweenVowels("communication", 1);
}

function main() {
  runAllTests();
}

main();
