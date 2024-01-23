const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(input));
// --------- 런타임 에러 ---------
const N = +input;
function fibonacci(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(N));
