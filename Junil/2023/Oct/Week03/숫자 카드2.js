let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(el => +el));

const N = input.shift();
const CardOnHand = input.shift();
const M = input.shift();
const CardOnCheck = input.shift();

const cardCounts = {};
const results = [];

for (const card of CardOnHand) {
  cardCounts[card] = (cardCounts[card] || 0) + 1;
  console.log(cardCounts);
}

for (const target of CardOnCheck) {
  const count = cardCounts[target] || 0;
  results.push(count);
}

console.log(results.join(" "));
