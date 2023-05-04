function solution(elements) {
  const n = elements.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += elements[(i + j) % n];
      set.add(sum);
    }
  }
  return set.size;
}
