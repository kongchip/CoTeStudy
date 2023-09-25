function solution(lottos, win_nums) {
  let matchedCount = 0;
  let zeroCount = 0;
  lottos.forEach((el) => {
    if (win_nums.indexOf(el) !== -1) {
      matchedCount++;
    }
    if (el === 0) {
      zeroCount++;
    }
  });

  const maxMin = [matchedCount + zeroCount, matchedCount];

  function switcher(n) {
    if (n === 6) return (n = 1);
    else if (n === 5) return (n = 2);
    else if (n === 4) return (n = 3);
    else if (n === 3) return (n = 4);
    else if (n === 2) return (n = 5);
    else return (n = 6);
  }

  return maxMin.map((el) => {
    return switcher(el);
  });
}
