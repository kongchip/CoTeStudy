function solution(s) {
  let resultArr = [];
  let count = 0;
  let zero = 0;
  let temps = "";

  function trans(s) {
    for (let i = 0; i < s.length; i++) {
      count++;

      if (s[i] === "1") {
        temps = temps + "1";
      } else if (s[i] === "0") {
        zero++;
      }
      resultArr = [count, zero];
    }
    // console.log(temps)
    // console.log(temps.length.toString(2))
    if (temps !== "1") {
      s = temps.length.toString(2);
      // console.log(s);
      return trans(s);
    }
    return resultArr;
  }

  if (s === "1") {
    return [0, 0];
  }

  return trans(s);
}
// 콜스택 에러..
