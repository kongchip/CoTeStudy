const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => +el));

const [[A, K], arr] = input;

function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      // left와 right 요소끼리 비교
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    count++;
    if (count === K) {
      target = result[result.length - 1]; // count와 K가 같다면, 마지막으로 추가해준 값 출력
    }
  }

  while (i < left.length) {
    result.push(left[i]); // left에 남아있는 값을 추가
    i++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }

  while (j < right.length) {
    result.push(right[j]); // right에 남아있는 값을 추가
    j++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }
  return result;
}

// 정렬되지 않은 배열 arr를 요소 1개만 가진 배열이 될 때까지 쪼개기
let count = 0;
let target;

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}

mergeSort(arr);
if (!target) {
  target = -1;
}
console.log(target);
