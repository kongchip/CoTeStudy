function solution(n) {
  const ternary = n.toString(3); // 3진법 변환
  const reverseNum = [...ternary].reverse().join(""); // 배열로 바꿔서 앞뒤 반전 시키고 문자열로 합침
  const decimal = parseInt(reverseNum, 3);
  return decimal;
}
