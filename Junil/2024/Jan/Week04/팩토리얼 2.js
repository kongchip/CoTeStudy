let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

function factorial(number) {
  if (number <= 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(input));
