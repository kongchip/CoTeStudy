// 메모리 초과

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arrN = input.slice(1, N + 1);
const arrM = input.slice(N + 1, N + M + 1);

const pokemonMap = {};
let answer = [];

arrN.forEach((el, idx) => {
  pokemonMap[el] = idx + 1;
});

arrM.map(item => {
  const num = parseInt(item, 10);
  if (!isNaN(num)) {
    answer.push(Object.keys(pokemonMap).find(key => pokemonMap[key] === num));
  } else if (pokemonMap[item]) {
    answer.push(pokemonMap[item]);
  }
});

console.log(answer.join("\n"));
