let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

let arr = input.map(v => v.split(" "));
let dance = ["ChongChong"];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < dance.length; j++) {
    if (arr[i].includes(dance[j])) {
      arr[i].forEach(el => dance.push(el));
      break;
    }
  }
}
let answer = dance.filter((el, i) => dance.indexOf(el) === i).length;
console.log(answer);
