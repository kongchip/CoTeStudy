function solution(s) {
  const answer = [];
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((col) => {
    col.forEach((row) => {
      if (!answer.includes(row)) answer.push(row);
    });
  });
  return answer;
}
