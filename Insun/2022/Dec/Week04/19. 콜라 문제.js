function solution(a, b, n) {
  // 3, 2, 20 36
  // 20 / 3 = 6 * 2 ... 2 = 12
  // 14 / 3 = 4 * 2 ... 2 = 8
  // 10 / 3 = 3 * 2 ... 1 = 6
  // 7 / 3 = 2 * 2 ... 1 = 4
  // 5 / 3 = 1 * 2 ... 2 = 2
  // 4 / 3 = 1 * 2 ... 1 = 2
  // 3 / 3 = 1 * 2 = 2
  // 20(n) / 2(a) = 10
  // 10 / 2 = 5
  // 5 / 2 = 2 ... 1
  // 2 / 2 = 1 => 1 + 1 = 2 / 2 = 1
  // 10 + 5 + 2 + 1 + 1
  // 재귀로 풀어보려했으나 실패 ㅠ
  // if(n < 2) return 1
  // let num = parseInt(n / a)*b
  // let remainder = Math.round(n % a)
  // return num + solution(a, b, num)

  let result = 0;
  let remainder = 0;
  while (n >= a) {
    remainder = n % a;
    n = parseInt(n / a) * b;
    result += n;
    n += remainder;
  }

  return parseInt(result);
}
