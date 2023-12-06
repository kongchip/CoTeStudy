let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(number =>
    number.includes(" ") ? number.split(" ").map(Number) : [Number(number)]
  );
const N = input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  if (input[i][0] === 1) {
    stack.push(input[i][1]);
  }

  if (input[i][0] === 2) {
    if (stack.length > 0) {
      //   console.log(stack.pop());
      answer.push(stack.pop());
    } else {
      answer.push(-1);
      //   console.log(-1);
    }
  }

  if (input[i][0] === 3) {
    // console.log(stack.length);
    answer.push(stack.length);
  }

  if (input[i][0] === 4) {
    // console.log(stack.length === 0 ? 1 : 0);
    answer.push(stack.length === 0 ? 1 : 0);
  }

  if (input[i][0] === 5) {
    if (stack.length > 0) {
      //   console.log(stack[stack.length - 1]);
      answer.push(stack[stack.length - 1]);
    } else {
      answer.push(-1);
      //   console.log(-1);
    }
  }
}

console.log(answer.join("\n"));
