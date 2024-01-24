let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
let count = 0;

function recursion(s, l, r) {
  count++;

  if (l >= r) return 1;
  else if (s.charAt(l) !== s.charAt(r)) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(string) {
  return recursion(string, 0, string.length - 1);
}

for (let i = 0; i < input.length; i++) {
  console.log(isPalindrome(input[i]), count);
  count = 0;
}
