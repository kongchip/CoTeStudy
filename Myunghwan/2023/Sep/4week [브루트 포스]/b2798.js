const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0].split(' ')[0];
let M = +input[0].split(' ')[1];

let cards = input[1]
  .split(' ')
  .map((el) => +el)
  .sort((a, b) => a - b);
let gap = 0;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum > gap && sum <= M) {
        gap = sum;
      }
    }
  }
}
console.log(gap);
