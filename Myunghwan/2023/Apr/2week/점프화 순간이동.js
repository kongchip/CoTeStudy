function solution(n) {
  let jump = 0;

  while (0 < n) {
    if (n % 2 !== 0) {
      n--;
      jump++;
    } else {
      n = n / 2;
    }
  }
  return jump;
}
