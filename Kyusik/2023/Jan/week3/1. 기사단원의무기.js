function solution(number, limit, power) {
  const divCountArr = [];
  // 약수 구하는 함수
  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (num / i != i) divisors.push(num / i);
      }
    }

    return divisors;
  };

  // number까지 각 수의 약수의 갯수 구하기
  for (let i = 1; i <= number; i++) {
    divCountArr.push(getDivisors(i).length);
  }

  // 공격력 제한 걸기
  const limitAttackArr = divCountArr.map((el) => {
    if (el > limit) {
      return power;
    }
    return el;
  });

  // 공격력 모두 더하기
  return limitAttackArr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}
