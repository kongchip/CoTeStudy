let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

console.log(
  input
    .sort((a, b) => {
      if (a.length !== b.length) {
        // 길이가 다르면 짧은 순서
        return a.length - b.length;
      } else {
        return a.localeCompare(b); // 길이가 같으면 알파벳 순서
      }
    })
    .filter((el, idx) => input.indexOf(el) === idx)
    .join("\n")
);
