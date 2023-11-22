let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim();

// const windows = new Array(Number(input)).fill(false);

// for (let i = 1; i <= Number(input); i++) {
//   for (let j = 1; j * i <= Number(input); j++) {
//     if (windows[j * i]) {
//       windows[j * i] = false;
//     } else {
//       windows[j * i] = true;
//     }
//   }
// }

// console.log(windows.filter(w => w === true).length);
// 메모리 초과

// 1, 4, 9, 16, 25, 36, 49, 64,
let result = 0;

for (i = 1; i * i <= Number(input); i++) {
  result++;
}

console.log(result);
