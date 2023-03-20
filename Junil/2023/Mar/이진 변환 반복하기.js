function solution(s) {
    let zeroCount = 0
    let count = 0

    while (s !== "1") {
        let zero = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") {
                zeroCount++
                zero++
            }
        }

        let c = s.length - zero
        s = c.toString(2)

        count++

        zero = 0
    }

    return [count, zeroCount]
}


// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (2.76ms, 37.1MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.2MB)
// 테스트 6 〉	통과 (0.17ms, 33.3MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.16ms, 33.5MB)
// 테스트 9 〉	통과 (2.61ms, 37.1MB)
// 테스트 10 〉	통과 (3.56ms, 37.2MB)
// 테스트 11 〉	통과 (2.81ms, 37.1MB)