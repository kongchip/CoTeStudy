function solution(citations) {
    //내림차순 정렬
    citations = citations.sort((a, b) => b - a)

    let h = 0

    // 논문 번호
    let count = 0

    while (count <= citations.length) {
        // 6 >= 1
        // h = 1, count = 1

        // 5 >= 2
        // h = 2 count = 2

        // 3 >= 3
        // h = 3 count = 3

        // 1 >= 4 (break)

        if (citations[count] >= count + 1) {
            h = count + 1
            count++
        } else {
            break
        }
    }

    return h
}

// 테스트 1 〉	통과 (0.28ms, 33.4MB)
// 테스트 2 〉	통과 (0.37ms, 33.6MB)
// 테스트 3 〉	통과 (0.34ms, 33.6MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (0.37ms, 33.5MB)
// 테스트 6 〉	통과 (0.39ms, 33.5MB)
// 테스트 7 〉	통과 (0.23ms, 33.5MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.17ms, 33.5MB)
// 테스트 10 〉	통과 (0.24ms, 33.5MB)
// 테스트 11 〉	통과 (0.64ms, 33.5MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (0.41ms, 33.5MB)
// 테스트 14 〉	통과 (0.35ms, 33.5MB)
// 테스트 15 〉	통과 (0.63ms, 33.4MB)
// 테스트 16 〉	통과 (0.06ms, 33.4MB)
