function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, '');

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
