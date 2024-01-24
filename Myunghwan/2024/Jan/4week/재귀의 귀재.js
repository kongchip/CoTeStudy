const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
// let result = [];
// function isPalindrome(n) {
//   for (let i = 0; i < Math.floor(n.length / 2); i++) {
//     let left = n[i];
//     let right = n[n.length - 1 - i];
//     if (left != right) {
//       return 0;
//     }
//   }
//   return 1;
// }

// input.forEach((el) => result.push(isPalindrome(el)));
// console.log(result.join('\n'));

// ------------함수 호출 횟수를 못구함 ---------
let answer = '';

function isPalindrome(str, cur, cnt) {
  const length = Math.floor(str.length / 2);
  if (cur >= length) {
    return (answer += '1' + ' ' + cnt + '\n');
  } else {
    if (str[cur] === str[str.length - cur - 1]) isPalindrome(str, cur + 1, cnt + 1);
    else return (answer += '0' + ' ' + cnt + '\n');
  }
}

input.forEach((el) => isPalindrome(el, 0, 1));

console.log(answer);
