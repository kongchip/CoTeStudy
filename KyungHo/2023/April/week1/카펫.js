function division(val) {
  let obj = {};

  for (let i = 1; i <= val; i++) {
    if (val % i === 0) obj[i] = val / i;
  }
  return obj;
}

function solution(brown, yellow) {
  let answer = [0, 0];

  if (yellow === 1) {
    return [3, 3];
  }
  let value = division(yellow);
  for (let key in value) {
    let val = Number(value[key]);
    key = Number(key);
    if ((key > val || key === val) && (key + 2) * 2 + val * 2 === brown) {
      answer[0] = key + 2;
      answer[1] = val + 2;
    }
  }
  return answer;
}

const result = solution(24, 24);
