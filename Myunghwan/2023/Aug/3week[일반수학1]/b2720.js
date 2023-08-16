// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// input.shift();

// let newArr = input.map((el) => +el);
// const [quarter, dime, nickel] = [25, 10, 5];
// let result = [];

// for (let i = 0; i < newArr.length; i++) {
//   let money = newArr[i];
//   let value = [0, 0, 0, 0];
//   value[0] = Math.floor(money / quarter);
//   money = money % quarter;
//   value[1] = Math.floor(money / dime);
//   money = money % dime;
//   value[2] = Math.floor(money / nickel);
//   money = money % nickel;
//   value[3] = Math.floor(money);
//   result.push(value.join(' '));
// }
// console.log(result.join('\n'));

const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}

function solution(change) {
  let count = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    count[i] += Math.floor(change / coins[i]);
    change %= coins[i];
  }
  return count.join(' ');
}
