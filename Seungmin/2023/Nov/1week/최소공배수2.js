const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let a = Math.max(...input)
  let b = Math.min(...input)

  let lcm = (a * b) / gcd(a, b)

  console.log(lcm)

  function gcd(a, b) {
    let remain
  
    while(b) {
      remain = a % b
      a = b
      b = remain
    }
  
    return a
  }
}

solution()