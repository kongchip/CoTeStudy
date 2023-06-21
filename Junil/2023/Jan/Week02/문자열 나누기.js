function solution(s) {
    let answer = 0
    let currentChar = ""
    let currentCount = 0
    let previousCount = 0

    for (let letter of s) {
        // 초기 값 설정
        if (!currentChar) {
            currentChar = letter
        }
        // 다음 글자와 비교
        if (currentChar === letter) {
            currentCount++
        } else {
            previousCount++
        }

        console.log(currentChar, letter)
        // 카운트가 같다면 answer++
        if (currentCount === previousCount) {
            answer++
            currentChar = ""
            currentCount = 0
            previousCount = 0
        }
    }
    if (currentChar) {
        answer++
    }
    return answer
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.49ms, 33.6MB)
// 테스트 3 〉	통과 (0.62ms, 33.8MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.6MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.08ms, 33.4MB)
// 테스트 9 〉	통과 (0.34ms, 33.6MB)
// 테스트 10 〉	통과 (0.72ms, 33.8MB)
// 테스트 11 〉	통과 (0.37ms, 33.7MB)
// 테스트 12 〉	통과 (0.46ms, 33.7MB)
// 테스트 13 〉	통과 (3.70ms, 37.1MB)
// 테스트 14 〉	통과 (3.53ms, 37.1MB)
// 테스트 15 〉	통과 (0.28ms, 33.6MB)
// 테스트 16 〉	통과 (0.67ms, 33.9MB)
// 테스트 17 〉	통과 (0.38ms, 33.7MB)
// 테스트 18 〉	통과 (0.61ms, 33.8MB)
// 테스트 19 〉	통과 (0.47ms, 33.8MB)
// 테스트 20 〉	통과 (1.01ms, 33.9MB)
// 테스트 21 〉	통과 (5.36ms, 37.1MB)
// 테스트 22 〉	통과 (0.71ms, 33.7MB)
// 테스트 23 〉	통과 (0.43ms, 33.6MB)
// 테스트 24 〉	통과 (0.36ms, 33.8MB)
// 테스트 25 〉	통과 (3.29ms, 37.1MB)
// 테스트 26 〉	통과 (0.65ms, 33.9MB)
// 테스트 27 〉	통과 (0.56ms, 33.7MB)
// 테스트 28 〉	통과 (0.42ms, 33.7MB)
// 테스트 29 〉	통과 (4.92ms, 37.1MB)
// 테스트 30 〉	통과 (0.45ms, 33.7MB)
// 테스트 31 〉	통과 (0.05ms, 33.4MB)
// 테스트 32 〉	통과 (0.05ms, 33.5MB)
// 테스트 33 〉	통과 (0.05ms, 33.6MB)
// 테스트 34 〉	통과 (0.05ms, 33.5MB)
// 테스트 35 〉	통과 (0.05ms, 33.4MB)
// 테스트 36 〉	통과 (0.05ms, 33.4MB)
// 테스트 37 〉	통과 (0.05ms, 33.5MB)
// 테스트 38 〉	통과 (0.05ms, 33.4MB)
// 테스트 39 〉	통과 (0.06ms, 33.6MB)
// 테스트 40 〉	통과 (0.14ms, 33.5MB)
// 테스트 41 〉	통과 (3.21ms, 37.1MB)
// 테스트 42 〉	통과 (3.18ms, 37.1MB)