function solution(lottos, win_nums) {
    // 0 카운트
    const zeroCount = lottos.filter((el) => el === 0).length

    // 당첨 번호 카운트
    let count = 0

    for (let i = 0; i < lottos.length; i++) {
        win_nums.includes(lottos[i]) ? count++ : null
    }

    // 순위화
    let maxRank = Math.min(7 - (count + zeroCount), 6)
    let minRank = Math.min(7 - count, 6)
    return [maxRank, minRank]
}


// 테스트 1 〉	통과 (0.09ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.09ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.09ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)
// 테스트 13 〉	통과 (0.10ms, 33.4MB)
// 테스트 14 〉	통과 (0.07ms, 33.4MB)
// 테스트 15 〉	통과 (0.06ms, 33.4MB)