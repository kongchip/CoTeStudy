function solution(arr) {
  let [max] = arr.splice(arr.indexOf(Math.max(...arr)), 1);
  let copyMax = max;
  while (true) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (max % arr[i] !== 0) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      max += copyMax;
    } else {
      break;
    }
  }
  return max;
}
