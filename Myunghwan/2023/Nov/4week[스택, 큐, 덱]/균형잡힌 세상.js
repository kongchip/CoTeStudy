const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];

for (let el of input) {
  const stack = [];
  let isCompare = true;
  if (el == '.') break;
  for (let i = 0; i < el.length; i++) {
    if (el[i] == '[' || el[i] == '(') {
      stack.push(el[i]);
    } else if (el[i] == ']') {
      if (stack[stack.length - 1] == '[') {
        stack.pop();
      } else {
        isCompare = false;
        break;
      }
    } else if (el[i] == ')') {
      if (stack[stack.length - 1] == '(') {
        stack.pop();
      } else {
        isCompare = false;
        break;
      }
    } else if (el[i] == '.') break;
  }
  if (stack.length > 0 || !isCompare) result.push('no');
  else result.push('yes');
}
console.log(result.join('\n'));
