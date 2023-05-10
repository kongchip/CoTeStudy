function solution(clothes) {
    let count = 1
    const clothesMap = new Map()

    // 의상 종류별로 개수를 카운팅
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1]
        if (!clothesMap.has(type)) {
            clothesMap.set(type, 1)
        } else {
            clothesMap.set(type, clothesMap.get(type) + 1)
        }
    }

    // 모든 경우의 수 계산
    // (2+1) * (1+1) - 1(알몸일 때) = 5
    // (3+1) - 1    
    for (const value of clothesMap.values()) {
        count = count * (value + 1)
    }

    // 아무것도 입지 않은 경우는 제외
    return count - 1
}


// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.14ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (0.15ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.09ms, 33.5MB)
// 테스트 16 〉	통과 (0.06ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.07ms, 33.5MB)
// 테스트 19 〉	통과 (0.07ms, 33.5MB)
// 테스트 20 〉	통과 (0.06ms, 33.5MB)
// 테스트 21 〉	통과 (0.06ms, 33.5MB)
// 테스트 22 〉	통과 (0.06ms, 33.4MB)
// 테스트 23 〉	통과 (0.06ms, 33.5MB)
// 테스트 24 〉	통과 (0.06ms, 33.5MB)
// 테스트 25 〉	통과 (0.07ms, 33.5MB)
// 테스트 26 〉	통과 (0.16ms, 33.4MB)
// 테스트 27 〉	통과 (0.06ms, 33.4MB)
// 테스트 28 〉	통과 (0.07ms, 33.4MB)