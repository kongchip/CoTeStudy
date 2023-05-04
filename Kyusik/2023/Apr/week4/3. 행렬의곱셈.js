function solution(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      result.push(elem);
    }
    newArr.push(result);
  }
  return newArr;
}
