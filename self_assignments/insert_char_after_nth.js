const string = "12345678912"
const N = 3
const charToInsert = "-"
let result = "";
let count = 0;

for(let index = 0; index < string.length; index++) {
  if(count === 3){
    result = result + "-";
    count = 0;
  }
  count++;
  result = result + string[index];

}
console.log(result);
