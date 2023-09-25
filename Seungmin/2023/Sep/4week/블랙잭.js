const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const max = input[0].split(' ').map(Number)[1];
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
let result = 0;

const solution = () => {
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        let sum = cards[i] + cards[j] + cards[k]
  
        if (sum === max) {
          console.log(sum)
          return
        }
        else if (result > max) break
        else if (sum < max && sum > result) result = sum
      }
    }
  }

  console.log(result)
}

solution()