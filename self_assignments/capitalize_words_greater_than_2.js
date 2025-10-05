const input = "I if love javascript  hi and python";
let result = "";
let secondIndex = 0;
let firstIndex;
for( let index = 0; index < input.length; index++){
  firstIndex = secondIndex;
  if(input[index] === " " || index === input.length - 1) {
    secondIndex = index;
    const mySlice = input.slice(firstIndex , secondIndex + 1).trim();
    if(mySlice.length > 2) {
      result = result + mySlice[0].toUpperCase() + mySlice.slice(1) + " ";
    } else {
      result = result + mySlice.toLowerCase() + " ";
    }
  }
}
console.log(result.trim());
