// 삼총사

function solution(numbers) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 0) {
                    count += 1
                }
            }
        }
    }
    return count
}

// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.12ms, 33.5MB)
// 테스트 5 〉	통과 (0.12ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.4MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.4MB)
// 테스트 11 〉	통과 (0.14ms, 33.4MB)
// 테스트 12 〉	통과 (0.12ms, 33.4MB)
// 테스트 13 〉	통과 (0.13ms, 33.5MB)