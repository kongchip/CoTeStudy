const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
//   .split('\n')
//   .map((el) => el.trim());
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const [c, nums] = input.split('\n');

console.log(nums.split(' ').filter((v) => isPrime(v)).length);
