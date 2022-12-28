function solution(t, p) {
  // t를 p의 길이로 나누고 배열에 넣어줌
  let arr = [];
  let char = "";
  console.log(char);
  for (let i = 0; i <= t.length - p.length; i++) {
    char = t.slice(i, i + p.length);
    arr.push(char);
  }
  console.log(arr);
  // 각 요소들을 number타입으로 바꿔주기
  let numArr = arr.map(Number);
  console.log(numArr);
  // p를 number타입으로 바꾸고, for문으로 배열을 돌면서 비교하기
  let numP = +p;
  let count = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] <= numP) {
      count++;
    }
  }
  return count;
}
