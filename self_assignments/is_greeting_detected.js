const input = "    Hi, hello elaa unnav!      ";
const isStartWith = input.trim().startsWith("Hi");
const isEndsWith = input.trim().endsWith("!");
if (isEndsWith === isStartWith === true) {
  console.log("greeting detected");
} else {
  console.log("not a greeting");
}
