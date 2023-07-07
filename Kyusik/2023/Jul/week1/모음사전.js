function sumSquare(idx) {
  let sum = 0;
  for (let i = idx; i >= 0; i -= 1) {
    sum += 5 ** i;
  }
  return sum;
}

function solution(word) {
  let answer = 0;
  const aeiou = { A: 0, E: 1, I: 2, O: 3, U: 4 };

  [...word].forEach((w, idx) => {
    const val = aeiou[w];
    answer += val * sumSquare(4 - idx) + 1;
  });

  return answer;
}
