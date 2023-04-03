function solution(people, limit) {
    people = people.sort((a, b) => b - a)
    let count = 0
    let lastIdx = people.length - 1

    for (let i = 0; i <= lastIdx; i++) {
        if (people[i] + people[lastIdx] <= limit) {
            count++
            lastIdx--
        } else {
            count++
        }
    }

    return count
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.97ms, 35.4MB)
// 테스트 2 〉	통과 (1.07ms, 33.5MB)
// 테스트 3 〉	통과 (1.17ms, 33.5MB)
// 테스트 4 〉	통과 (1.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.68ms, 33.5MB)
// 테스트 6 〉	통과 (0.42ms, 33.6MB)
// 테스트 7 〉	통과 (0.60ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.5MB)
// 테스트 9 〉	통과 (0.21ms, 33.6MB)
// 테스트 10 〉	통과 (1.06ms, 33.5MB)
// 테스트 11 〉	통과 (0.97ms, 33.5MB)
// 테스트 12 〉	통과 (0.88ms, 33.5MB)
// 테스트 13 〉	통과 (1.07ms, 33.5MB)
// 테스트 14 〉	통과 (1.21ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (33.04ms, 37.7MB)
// 테스트 2 〉	통과 (40.55ms, 38.3MB)
// 테스트 3 〉	통과 (15.26ms, 38.2MB)
// 테스트 4 〉	통과 (28.43ms, 38.3MB)
// 테스트 5 〉	통과 (40.42ms, 38MB)