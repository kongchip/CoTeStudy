function solution(nums) {
  // nums배열 길이의 반만큼만 폰켓몬을 선택할수있음
  // for문을 nums배열 길이만큼 돌린다?
  // 3종류일때, 2개를 뽑는다 -> 2
  // 3종류일때, 3개를 뽑는다 -> 3
  // 2종류일때, 3개를 뽑는다 -> 2
  let newNum = new Set(nums);
  console.log(newNum.size);
  if (nums.length / 2 < newNum.size) return nums.length / 2;
  else if (nums.length / 2 >= newNum.size) return newNum.size;
}
