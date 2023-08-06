const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let drawingPaper = Array.from(Array(100), () => Array(100).fill(0));
const confetti = input.slice(1).map((line) => line.split(` `).map(Number));
let size = 0;

if (Number(input[0]) !== confetti.length) return;

confetti.forEach((line) => {
  const [x, y] = line;

  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (1 === drawingPaper[i][j]) continue;
      drawingPaper[i][j] = 1;
      size++;
    }
  }
});

console.log(size);
