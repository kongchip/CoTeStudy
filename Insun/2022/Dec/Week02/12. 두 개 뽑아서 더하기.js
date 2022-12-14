function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  // 중복 제거 및 정렬
  result = [...new Set(result)].sort((a, b) => a - b);
  return result;
}
