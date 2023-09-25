function solution(food) {
    // result 앞 부분을 완성하고 reverse
    let first = ""
    let count
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 !== 0) {
            count = food[i] - 1
        } else {
            count = food[i]
        }
        count / 2 <= 0 ? null : first += i.toString().repeat(count / 2)

    }
    const second = first.split("").reverse().join("")
    return first + 0 + second
}

// 테스트 1 〉	통과 (0.19ms, 33.6MB)
// 테스트 2 〉	통과 (0.16ms, 33.6MB)
// 테스트 3 〉	통과 (0.15ms, 33.6MB)
// 테스트 4 〉	통과 (0.24ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.7MB)
// 테스트 6 〉	통과 (0.20ms, 33.4MB)
// 테스트 7 〉	통과 (0.24ms, 33.5MB)
// 테스트 8 〉	통과 (0.15ms, 33.5MB)
// 테스트 9 〉	통과 (0.11ms, 33.6MB)
// 테스트 10 〉	통과 (0.20ms, 33.5MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.6MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)
// 테스트 14 〉	통과 (0.38ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.5MB)
// 테스트 16 〉	통과 (0.05ms, 33.6MB)
// 테스트 17 〉	통과 (0.05ms, 33.4MB)
// 테스트 18 〉	통과 (0.05ms, 33.5MB)
// 테스트 19 〉	통과 (0.05ms, 33.4MB)
// 테스트 20 〉	통과 (0.06ms, 33.6MB)