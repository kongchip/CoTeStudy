let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" "));

const N = input.shift();

const currSet = new Set();

input.forEach(el => {
  const [name, status] = el;

  if (status === "enter") {
    currSet.add(name);
  } else if (status === "leave") {
    currSet.delete(name);
  }
});

const answer = Array.from(currSet).sort().reverse().join("\n");

console.log(answer);
