function solution(progresses, speeds) {
  let answer = [];
  let idx = 0;
  let cidx = 0;
  while (idx < progresses.length) {
    let val = 100 - progresses[idx];
    let count = Math.ceil(val / speeds[idx]);
    progresses = progresses.map((v, idx) => {
      return v + speeds[idx] * count;
    });
    for (vs of progresses.slice(idx)) {
      if (vs >= 100)
        answer[cidx] = answer[cidx] === undefined ? 1 : answer[cidx] + 1;
      else break;
    }
    idx += answer[answer.length - 1];
    cidx++;
  }

  return answer;
}
