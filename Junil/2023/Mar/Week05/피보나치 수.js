// function solution(n) {
//     let a = 0, b = 1, c

//     for (let i = 2; i <= n; i++) {
//         c = a + b
//         a = b
//         b = c
//     }

//     return b % 1234567
// }

function solution(n) {
    const arr = [0, 1]

    for (let i = 2; i <= n; i++) {
        let sum = arr[i - 1] + arr[i - 2]
        arr.push(sum % 1234567)
    }
    return arr[n]
}




// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.6MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.6MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.5MB)
// 테스트 9 〉	통과 (0.13ms, 33.6MB)
// 테스트 10 〉	통과 (0.23ms, 33.5MB)
// 테스트 11 〉	통과 (0.24ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (4.52ms, 39.1MB)
// 테스트 14 〉	통과 (4.39ms, 39MB)