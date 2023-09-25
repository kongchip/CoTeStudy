/*
3
3 7
15 7
5 2
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let paper = Array.from(Array(100), () => Array(100).fill(0));
const confetti = input.slice(1).map((el) => el.split(` `).map(Number));
let size = 0;

confetti.forEach((line) => {
  const [x, y] = line;

  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (paper[i][j] === 1) continue;
      paper[i][j] = 1;
      size++;
    }
  }
});

console.log(size);
