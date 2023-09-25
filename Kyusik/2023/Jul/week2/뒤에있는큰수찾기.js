function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    console.log(stack.at(-1));
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
