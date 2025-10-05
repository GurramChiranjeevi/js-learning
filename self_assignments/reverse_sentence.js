const input = "hello,\tmy name is chiranjeevi";
let inputLength = input.length;
let endIndex = inputLength;
let result = "";

for (let index = input.length - 1; index >= 0; index--) {
  if (input[index] === " ") {
    result = result + mySlice(input, index + 1, endIndex) + " ";
    endIndex = index;
  }
}
result = result + mySlice(input, 0, endIndex);
console.log(result);
console.log((inputLength === result.length));
console.log(input.length);

function mySlice(string, startIndex, endIndex) {
  let result = "";
  for (let index = startIndex; index < endIndex; index++) {
    result = result + string[index];
  }
  return result;


}
