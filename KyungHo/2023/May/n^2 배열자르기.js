const solution = (n, left, right) => {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const share = parseInt(i / n);
    const reminder = i % n;
    answer.push(Math.max(share, reminder) + 1);
  }
  return answer;
};
