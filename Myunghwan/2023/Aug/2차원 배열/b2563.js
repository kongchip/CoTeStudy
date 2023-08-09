// const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
// const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

// let drawingPaper = Array.from(Array(100), () => Array(100).fill(0));
// const confetti = lines.slice(1).map(line => line.split(` `).map(Number));
// let size = 0;

// if (Number(lines[0]) !== confetti.length) return;

// confetti.forEach(line => {
//     const [x, y] = line;

//     for(let i = x; i < x+10; i++) {
//         for(let j = y; j < y+10; j++) {
//             if(1 === drawingPaper[i][j]) continue;
//             drawingPaper[i][j] = 1;
//             size++;
//         }
//     }
// })

// console.log(size)

const filePath = `linux` === process.platform ? `dev/stdin` : 'input.txt';
const lines = require('fs').readFileSync(filePath).toString().trim().split(`\n`);

let drawingPaper = Array.from(Array(100), () => Array(100).fill(0));
const confetti = lines.slice(1).map((line) => line.split(` `).map(Number));
let size = 0;

if (Number(lines[0]) !== confetti.length) return;

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
