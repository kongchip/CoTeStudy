function solution(dartResult) {
  let result = [];
  dartResult = dartResult.split("");

  for (let i = 0; i < dartResult.length; i++) {
    // if(!isNaN(dartResult[i])) {
    // dartResult[i] = (dartResult[i-1] === "1" ? 10 : dartResult[i]);
    // }

    if (dartResult[i] + dartResult[i + 1] === "10") {
      dartResult[i] = "10";
      dartResult.splice(i + 1, 1);
      // splice를 이용하여 index 자리가 i+1에 있는 0을 없애준다.
      // 안 없애주면 [~, 10, 0, ~] 이렇게 10이 들어가고 0도 들어가게 되기 때문
    }

    if (dartResult[i] === "S") {
      result.push(Math.pow(dartResult[i - 1], 1));
    }
    if (dartResult[i] === "D") {
      result.push(Math.pow(dartResult[i - 1], 2));
    }
    if (dartResult[i] === "T") {
      result.push(Math.pow(dartResult[i - 1], 3));
    }

    if (dartResult[i] === "*") {
      result[result.length - 2] = result[result.length - 2] * 2;
      result[result.length - 1] = result[result.length - 1] * 2;
    }

    if (dartResult[i] === "#") {
      result[result.length - 1] = result[result.length - 1] * -1;
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}
