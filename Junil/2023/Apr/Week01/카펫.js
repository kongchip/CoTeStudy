function solution(brown, yellow) {
    // return x * y = brown + yellow
    const total = brown + yellow
    let x, y

    for (y = 3; y <= Math.floor(total / 3); y++) {
        // y로 나눠진다면

        if (total % y === 0) {

            x = total / y

            if ((x - 2) * (y - 2) === yellow) {
                return [x, y]
            }
        }
    }

    return null
}

// 스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.18ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.5MB)
// 테스트 7 〉	통과 (0.18ms, 33.6MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.20ms, 33.6MB)
// 테스트 11 〉	통과 (0.05ms, 33.6MB)
// 테스트 12 〉	통과 (0.04ms, 33.5MB)
// 테스트 13 〉	통과 (0.04ms, 33.4MB)