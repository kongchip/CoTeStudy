const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let groupA = new Set(input[1].split(' '))
  let groupB = new Set(input[2].split(' '))

  let newGroupA = [...groupB].filter(el => !groupA.has(el))
  let newGroupB = [...groupA].filter(el => !groupB.has(el))
  
  console.log(newGroupA.length + newGroupB.length)
}

// const solution = () => {
//   let result = 0
//   let groupA = new Set(input[1].split(' '))
//   let groupB = new Set(input[2].split(' '))

//   groupA.forEach(el => groupB.has(el) && result++)
//   groupB.forEach(el => groupA.has(el) && result++)
  

//   console.log(result)
// }

solution()