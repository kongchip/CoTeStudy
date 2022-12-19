function solution(n) {
    if (n <= 1) return 0
    let count = 0
    for (let i = 2; i <= n; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) count++
    }
    return count
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (1.50ms, 36.4MB)
// 테스트 4 〉	통과 (1.79ms, 36.6MB)
// 테스트 5 〉	통과 (1.67ms, 36.4MB)
// 테스트 6 〉	통과 (13.90ms, 36.4MB)
// 테스트 7 〉	통과 (2.78ms, 36.4MB)
// 테스트 8 〉	통과 (8.70ms, 36.4MB)
// 테스트 9 〉	통과 (18.19ms, 36.4MB)
// 테스트 10 〉	실패 (시간 초과)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

function solution(n) {

    if (n <= 1) return 0
    let count = 0

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) count++
    }
    return count;
}

function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false;
    }
    return true;
}

//   테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.4MB)
// 테스트 4 〉	통과 (0.56ms, 33.5MB)
// 테스트 5 〉	통과 (0.27ms, 33.4MB)
// 테스트 6 〉	통과 (2.26ms, 35.9MB)
// 테스트 7 〉	통과 (1.22ms, 35.8MB)
// 테스트 8 〉	통과 (1.81ms, 36MB)
// 테스트 9 〉	통과 (2.08ms, 35.9MB)
// 테스트 10 〉	통과 (46.49ms, 35.9MB)
// 테스트 11 〉	통과 (226.55ms, 35.9MB)
// 테스트 12 〉	통과 (55.01ms, 35.9MB)
// 효율성  테스트
// 테스트 1 〉	통과 (233.83ms, 35.8MB)
// 테스트 2 〉	통과 (223.33ms, 35.9MB)
// 테스트 3 〉	통과 (250.12ms, 35.7MB)
// 테스트 4 〉	통과 (218.40ms, 35.8MB)