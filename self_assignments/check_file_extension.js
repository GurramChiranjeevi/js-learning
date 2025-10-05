const input = "checkFile.xlsx";
const extension = input.slice(input.indexOf(".") + 1);
let result = "";
result = `it is a .${extension} file`;
console.log(result);
