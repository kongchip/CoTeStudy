const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input[1].split(' ').map((el) => +el);

let M = input[3].split(' ').map((el) => +el);

let cardsMap = new Map();

// N에서 각 수의 갯수구하기
for (cards of N) {
  if (cardsMap.has(cards)) {
    cardsMap.set(cards, cardsMap.get(cards) + 1);
  } else {
    cardsMap.set(cards, 1);
  }
}

// N을 순회하면서 위에서 구한 값의 갯수를 출력
let result = [];
for (haveCards of M) {
  if (cardsMap.has(haveCards)) {
    result.push(cardsMap.get(haveCards));
  } else result.push(0);
}
console.log(result.join(' '));
