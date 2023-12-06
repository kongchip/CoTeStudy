let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.pop();

function isBalanced(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "]") {
      if (stack.length === 0) {
        return "no";
      }

      const top = stack.pop();
      if ((char === ")" && top !== "(") || (char === "]" && top !== "[")) {
        return "no";
      }
    }
  }

  return stack.length === 0 ? "yes" : "no";
}

for (let i = 0; i < input.length; i++) {
  console.log(isBalanced(input[i]));
}
