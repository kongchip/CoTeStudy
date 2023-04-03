function solution(brown, yellow) {
  const divisors = [];

  if (yellow === 1) {
    divisors.push(1);
    divisors.push(1);
  }
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      divisors.push(i);
      divisors.push(yellow / i);
    }
  }
  divisors.sort((a, b) => {
    return b - a;
  });

  let left = 0;
  let right = divisors.length - 1;
  while (left < right) {
    if ((divisors[left] + divisors[right]) * 2 + 4 === brown) {
      return [divisors[left] + 2, divisors[right] + 2];
    }
    left++;
    right--;
  }
}
