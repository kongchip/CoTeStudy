function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}
