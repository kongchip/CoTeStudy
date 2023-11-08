const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 분자와 분모의 최대공약수로 나누면 기약분수
const solution = () => {
  let arr = input.map(el => el.split(' ').map(Number))
  let a = (arr[0][0] * arr[1][1]) + (arr[0][1] * arr[1][0])
  let b = arr[0][1] * arr[1][1]

  let temp = gcd(a, b)

  if(temp !== 1) {
    a = a / temp
    b = b / temp
  }

  console.log(a, b)

  function gcd(a, b) {
    let remain

    if(a < b) {
      let temp = a

      a = b
      b = temp
    }
  
    while(b) {
      remain = a % b
      a = b
      b = remain
    }
  
    return a
  }
}

solution()