const input = "chiranjeevi";
const vowels = "aeiou";
let count = 0;

for(let index = 0; index < input.length; index++) {
  if(vowels.includes(input[index])) {
    count++;
  }
}
console.log(count);
