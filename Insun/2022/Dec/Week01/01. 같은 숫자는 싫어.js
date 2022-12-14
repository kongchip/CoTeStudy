function solution(arr) {
  // 연속으로 나타나는 숫자는 한개만 남기고 제거
  // 반복문을 돌면서 이전 숫자와 현재 숫자가 같으면 현재 숫자만 남기면 되지 않을까?
  // -> set으로 중복을 빼주면 될 줄 알았는데 아니었따...
  // 현재 인덱스와 다음 인덱스가 다르면 새 배열에 추가 => 같은거는 x => 바로 통과...^^
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // newArr = [...new Set(arr)]
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
