// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n')
let input = require('fs').readFileSync(__dirname+'/10798.txt').toString().split('\n')



// input[i++][j]

let ans = ""

let maxLength = Math.max(...input.map(word => word.length));
  
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i < input[j].length) {
        ans += input[j][i];
    }
  }
}

console.log(ans)

