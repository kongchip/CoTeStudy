function solution(n, k) {
  const numbers = n.toString(k).split('0');
  const isPrime = (num) => {
    if (!num || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return numbers.reduce((acc, cur) => acc + (isPrime(+cur) ? 1 : 0), 0);
}
