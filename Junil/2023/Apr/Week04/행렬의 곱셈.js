function solution(arr1, arr2) {
    const answer = []

    for (let i = 0; i < arr1.length; i++) {
        const row = []

        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0

            for (let k = 0; k < arr2.length; k++) {
                sum += arr1[i][k] * arr2[k][j]
            }
            row.push(sum)
        }
        answer.push(row)
    }
    return answer
}


// 테스트 1 〉	통과 (3.09ms, 37MB)
// 테스트 2 〉	통과 (5.44ms, 38.8MB)
// 테스트 3 〉	통과 (4.91ms, 38.7MB)
// 테스트 4 〉	통과 (0.72ms, 33.8MB)
// 테스트 5 〉	통과 (8.07ms, 38.7MB)
// 테스트 6 〉	통과 (6.46ms, 38.4MB)
// 테스트 7 〉	통과 (0.64ms, 33.6MB)
// 테스트 8 〉	통과 (0.35ms, 33.7MB)
// 테스트 9 〉	통과 (0.30ms, 33.7MB)
// 테스트 10 〉	통과 (5.40ms, 38.6MB)
// 테스트 11 〉	통과 (3.02ms, 36.8MB)
// 테스트 12 〉	통과 (0.42ms, 33.7MB)
// 테스트 13 〉	통과 (4.06ms, 38.5MB)
// 테스트 14 〉	통과 (4.81ms, 38.7MB)
// 테스트 15 〉	통과 (3.61ms, 37.2MB)
// 테스트 16 〉	통과 (3.06ms, 37.9MB)