function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => {
    return { priority, index };
  });
  while (queue.length) {
    const excution = queue.shift();
    if (queue.some((el) => el.priority > excution.priority)) {
      queue.push(excution);
    } else {
      answer++;
      if (excution.index === location) break;
    }
  }
  return answer;
}
