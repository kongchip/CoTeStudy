let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

const setA = new Set();

for (let i = 0; i < input.length; i++) {
  let string = "";
  for (let j = i; j < input.length; j++) {
    string += input[j];
    setA.add(string);
  }
}

console.log(setA.size);
