function solution(arr) {
    // 유클리드 호제법 lcm = (num1*num2) / gcd
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    const lcm = (a, b) => a * b / gcd(a, b)

    // 누적값과 현재값의 최소공배수
    let result = arr[0]

    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i])

    }
    return result
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.6MB)
// 테스트 3 〉	통과 (0.09ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.5MB)