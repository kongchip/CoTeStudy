function solution(n) {
  let energy = 0;
  while (n !== 0) {
    if (n % 2 !== 0) {
      n--;
      energy++;
    } else {
      n = n / 2;
    }
  }

  return energy;
}
