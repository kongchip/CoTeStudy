function solution(n, a, b) {
  let count = 1;
  while (n !== 2) {
    if ((a % 2 === 0 && a - 1 === b) || (a % 2 !== 0 && a + 1 === b)) {
      return count;
    } else if ((b % 2 === 0 && b - 1 === a) || (b % 2 !== 0 && b + 1 === a)) {
      return count;
    } else {
      count++;
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      n = Math.floor(n / 2);
    }
  }

  return count;
}
