function solution(X, Y) {
    // 짝궁이 00 일 경우 어떻게 처리? => Number()
    // console.log(00 === 0)

    X = X.toString()
    Y = Y.split("")

    let ans = []

    // X[i] 값이 Y 배열에 있는 지 확인하고 있으면 ans 에 푸시 후 다시 처음부터 조회
    // 시간초과 뜸, 
    // for (let i = 0; i < X.length; i++) {
    //     if (Y.includes(X[i])) {
    //         ans.push(Y.splice(Y.indexOf(X[i]), 1))
    //     }
    // }

    // splice를 사용하지 않으면 통과할 줄 알았는데 시간초과 뜸..
    // for (const digit of X) {
    //     if (Y.includes(digit)) {
    //         ans.push(digit);
    //         Y[Y.indexOf(digit)] = null;
    //     }
    // }

    if (ans.length === 0) return "-1"
    if (Number(ans.join("")) === 0) return "0"

    return ans.sort((a, b) => b - a).join("")
}


// 테스트 1 〉	통과(0.06ms, 33.4MB)
// 테스트 2 〉	통과(0.08ms, 33.4MB)
// 테스트 3 〉	통과(0.09ms, 33.4MB)
// 테스트 4 〉	통과(0.08ms, 33.4MB)
// 테스트 5 〉	통과(0.08ms, 33.5MB)
// 테스트 6 〉	통과(1.58ms, 33.7MB)
// 테스트 7 〉	통과(0.47ms, 33.5MB)
// 테스트 8 〉	통과(1.69ms, 33.8MB)
// 테스트 9 〉	통과(0.81ms, 33.5MB)
// 테스트 10 〉	통과(1.61ms, 33.7MB)
// 테스트 11 〉	실패(시간 초과)
// 테스트 12 〉	실패(시간 초과)
// 테스트 13 〉	실패(시간 초과)
// 테스트 14 〉	실패(시간 초과)
// 테스트 15 〉	실패(시간 초과)
// 테스트 16 〉	통과(0.07ms, 33.5MB)
// 테스트 17 〉	통과(0.07ms, 33.4MB)
// 테스트 18 〉	통과(0.06ms, 33.6MB)
// 테스트 19 〉	통과(0.06ms, 33.4MB)


function solution(X, Y) { // 구글링한 답변
    let answer = ''
    X = X.split("")
    Y = Y.split("")

    // X, Y 를 넣고 직접 확인하는게 아닌 0 ~ 9 까지의 숫자를 필터링하여 
    for (let i = 0; i < 10; i++) {
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        answer += String(i).repeat(Math.min(curX, curY))
    }
    if (answer === '') return "-1"
    if (Number(answer) === 0) return "0"
    // 내림차순으로 정렬해 반환하면 최댓값
    return answer.split("").sort((a, b) => Number(b) - Number(a)).join("")
}

// 테스트 1 〉	통과 (0.19ms, 33.4MB)
// 테스트 2 〉	통과 (0.23ms, 33.4MB)
// 테스트 3 〉	통과 (0.20ms, 33.4MB)
// 테스트 4 〉	통과 (0.19ms, 33.4MB)
// 테스트 5 〉	통과 (0.29ms, 33.5MB)
// 테스트 6 〉	통과 (1.10ms, 33.5MB)
// 테스트 7 〉	통과 (0.88ms, 33.5MB)
// 테스트 8 〉	통과 (0.67ms, 33.4MB)
// 테스트 9 〉	통과 (0.48ms, 33.4MB)
// 테스트 10 〉	통과 (0.84ms, 33.4MB)
// 테스트 11 〉	통과 (1658.03ms, 202MB)
// 테스트 12 〉	통과 (1660.21ms, 202MB)
// 테스트 13 〉	통과 (1398.53ms, 202MB)
// 테스트 14 〉	통과 (1468.24ms, 202MB)
// 테스트 15 〉	통과 (1345.93ms, 202MB)
// 테스트 16 〉	통과 (0.29ms, 33.4MB)
// 테스트 17 〉	통과 (0.17ms, 33.4MB)
// 테스트 18 〉	통과 (0.17ms, 33.6MB)
// 테스트 19 〉	통과 (0.20ms, 33.4MB)