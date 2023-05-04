function solution(elements) {
  let start = 0;
  let end = start + 1;
  let arr = [];
  let copy = [...elements, ...elements];
  let flagvalue = 1;
  while (true) {
    let sum = copy.slice(start, end).reduce((a, b) => a + b);

    if (start === elements.length) {
      start = 0;
      end = flagvalue + 1;
      flagvalue += 1;
    } else {
      start++;
      end++;
      arr.push(sum);
    }

    if (flagvalue === elements.length) break;
  }
  arr.push(elements.reduce((a, b) => a + b));
  return Array.from(new Set(arr)).length;
}
