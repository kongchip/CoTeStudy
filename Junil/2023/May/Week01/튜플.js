function solution(s) {
    // 입력값 2차원 배열로
    s = s.slice(2, -2).split("},{").map((el) => el.split(',').map((el) => Number(el)))

    let counts = {}

    // counts에 출현 횟수만큼 늘려주기
    for (const subArr of s) {
        for (const num of subArr) {
            counts[num] = (counts[num] || 0) + 1
        }
    }

    // 중복을 제거하고 한 배열로 만듦
    const uniqueNums = [...new Set([].concat(...s))]

    console.log(uniqueNums)

    // counts value로 sorting
    uniqueNums.sort((a, b) => counts[b] - counts[a])

    return uniqueNums

}

// 테스트 1 〉	통과 (0.12ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.25ms, 33.5MB)
// 테스트 5 〉	통과 (0.39ms, 33.5MB)
// 테스트 6 〉	통과 (0.62ms, 33.5MB)
// 테스트 7 〉	통과 (7.35ms, 37.9MB)
// 테스트 8 〉	통과 (13.91ms, 38.5MB)
// 테스트 9 〉	통과 (18.30ms, 38.8MB)
// 테스트 10 〉	통과 (14.23ms, 38.7MB)
// 테스트 11 〉	통과 (18.69ms, 40.5MB)
// 테스트 12 〉	통과 (34.07ms, 43.8MB)
// 테스트 13 〉	통과 (33.47ms, 43.6MB)
// 테스트 14 〉	통과 (33.95ms, 44.2MB)
// 테스트 15 〉	통과 (0.09ms, 33.4MB)