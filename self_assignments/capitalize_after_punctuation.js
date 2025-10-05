const input = "hello.my name is chiranjeevi! how are you?";
let result = "";
const punctuation = " .!?";
for (let index = 0; index < input.length; index++) {
  if(index === 0 || punctuation.includes(input[index - 1] )) {
    result += input[index].toUpperCase();
  }
  else {
    result += input[index].toLowerCase();
  }
}
console.log(result);


