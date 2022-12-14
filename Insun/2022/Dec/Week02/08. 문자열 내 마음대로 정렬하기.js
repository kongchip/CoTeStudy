function solution(strings, n) {
  let sorted = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      return a > b ? 1 : -1;
    }
  });
  return sorted;
}
