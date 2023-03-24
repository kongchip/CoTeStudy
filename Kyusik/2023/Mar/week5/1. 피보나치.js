// function solution(n) {
//     function fib(number) {
//         if (number === 0) {
//             return 0;
//         } else if (number === 1) {
//             return 1;
//         }
//         return fib(number - 1) + fib(number - 2);
//     }

//     return fib(n) % 1234567;
// }
// 시간초과 및 콜스택 런타임 에러
// 숫자가 지나치게 커지는 자료형 문제 때문에 모듈러 연산을 적용해야함.

/*
f2 = f1 + f0
f3 = f2 + f1
   = f1+ f0 + f1
f4 = f3 + f2
   = f2 + f1 + f2
*/

// function solution(n) {
//     let memo = [0, 1];
//     function fib(number) {
//         if (memo[number] !== undefined) {
//             return memo[number];
//         } else {
//             memo[number] = (fib(number - 1) + fib(number - 2)) % 1234567;
//             // 모듈러 연산 활용 : (A + B) % C = ((A % C) + (B % C)) % C
//         }
//         return memo[number];
//     }
//     return fib(n);
// }
// 메모이제이션으로 최적화를 해도 콜스택에러는 뜸. 재귀를 쓰면 안될듯

function solution(n) {
  let memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }
  return memo[n];
}
