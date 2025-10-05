let input = "jAVAsCRIPT is FUN";
let result = "";

for (let index = 0; index < input.length; index++) {
  if(index === 0 || input[index - 1] === " "){
    result += input[index].toUpperCase();
  } else {
    result += input[index].toLowerCase();
  }
}

console.log(result);
