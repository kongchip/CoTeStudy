function solution(k, score) {
  let mjArr = [];
  let resultArr = [];
  for (let i = 0; i < score.length; i++) {
    if (mjArr.length < k) {
      mjArr.push(score[i]);
    } else if (mjArr.length > k || mjArr[k - 1] < score[i]) {
      mjArr[k - 1] = score[i];
    }
    mjArr.sort((a, b) => b - a);
    resultArr.push(mjArr[mjArr.length - 1]);
  }
  return resultArr;
}
