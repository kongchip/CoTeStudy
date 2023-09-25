function solution(s) {
  let stack = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? stack++ : stack--;
    if (stack < 0) {
      return false;
    } else if (stack > s.length - i) {
      return false;
    }
  }
  if (stack !== 0) {
    return false;
  }
  return true;
}
