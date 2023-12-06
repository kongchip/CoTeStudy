let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 1 )(
// const T = Number(input.shift());
// const answer = [];

// for (let i = 0; i < T; i++) {
//   let stack = 0;

//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === "(") {
//       stack++;
//     }
//     if (input[i][j] === ")") {
//       stack--;
//     }
//   }
//   answer.push(stack);
// }

// console.log(answer.map(r => (r !== 0 ? "NO" : "YES")).join("\n"));

const T = Number(input.shift());
const answer = [];

for (let i = 0; i < T; i++) {
  let stack = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack++;
    } else if (input[i][j] === ")") {
      stack--;
      if (stack < 0) {
        break;
      }
    }
  }

  answer.push(stack === 0 ? "YES" : "NO");
}

console.log(answer.join("\n"));
