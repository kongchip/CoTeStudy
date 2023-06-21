function solution(n) {
  let nl = n.toString(2).replace(/0/g, "").length;
  let vl = 0;
  while (nl !== vl) {
    n += 1;
    vl = n.toString(2).replace(/0/g, "").length;
  }

  return n;
}
