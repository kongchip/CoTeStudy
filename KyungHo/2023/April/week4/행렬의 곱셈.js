function solution(arr1, arr2) {
  let answer = [];
  let newArr2 = [];
  arr2.map((v) => {
    v.map((v2, idx2) => {
      newArr2[idx2] = Array.isArray(newArr2[idx2])
        ? [...newArr2[idx2], v2]
        : [v2];
    });
  });

  arr1.map((v) => {
    let ans = [];
    newArr2.map((v2) => {
      let count = 0;
      v2.map((v3, idx3) => {
        count += v3 * v[idx3];
      });
      ans.push(count);
    });
    answer.push(ans);
  });

  return answer;
}
