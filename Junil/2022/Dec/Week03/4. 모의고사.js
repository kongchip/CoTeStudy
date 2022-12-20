function solution(answers) {
    // answer idx === supo idx
    const supo = { a: [1, 2, 3, 4, 5], b: [2, 1, 2, 3, 2, 4, 2, 5], c: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] }
    let count1 = 0
    let count2 = 0
    let count3 = 0

    for (let i = 0; i < answers.length; i++) {
        if (supo.a[i % 5] === answers[i]) {
            count1++
        }
        if (supo.b[i % 8] === answers[i]) {
            count2++
        }
        if (supo.c[i % 10] === answers[i]) {
            count3++
        }
    }
    const maxCount = Math.max(count1, count2, count3)
    const result = []

    if (count1 === maxCount) {
        result.push(1)
    }

    if (count2 === maxCount) {
        result.push(2);
    }

    if (count3 === maxCount) {
        result.push(3);
    }

    return result;
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.22ms, 33.5MB)
// 테스트 7 〉	통과 (1.14ms, 33.5MB)
// 테스트 8 〉	통과 (0.37ms, 33.5MB)
// 테스트 9 〉	통과 (4.50ms, 36.8MB)
// 테스트 10 〉	통과 (0.60ms, 33.7MB)
// 테스트 11 〉	통과 (3.10ms, 36.7MB)
// 테스트 12 〉	통과 (4.45ms, 36.8MB)
// 테스트 13 〉	통과 (0.30ms, 33.5MB)
// 테스트 14 〉	통과 (3.30ms, 36.7MB)