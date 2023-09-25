function solution(s) {
  let answer = 0;
  let charArr = s.split("");
  let count = 0;
  while (count < s.length) {
    let copyArr = charArr.slice(count);
    let arr = [copyArr[0]];
    for (let i = 1; i < copyArr.length; i++) {
      if (!arr.length) {
        arr.push(copyArr[i]);
        continue;
      }
      if (arr[arr.length - 1] === "[" && copyArr[i] === "]") arr.pop();
      else if (arr[arr.length - 1] === "{" && copyArr[i] === "}") arr.pop();
      else if (arr[arr.length - 1] === "(" && copyArr[i] === ")") arr.pop();
      else arr.push(copyArr[i]);
    }
    if (!arr.length) {
      answer++;
    }
    charArr.push(charArr[count]);
    count++;
  }

  return answer;
}
