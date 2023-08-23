const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => +el);

let arr = [];
// let arr1 = [];
input.pop();
// console.log(input);

for (let i = 0; i < input.length; i++) {
  let arr1 = [];
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j === 0) {
      arr1.push(j);
    }
    arr.push(arr1);
  }
}
console.log(arr);
