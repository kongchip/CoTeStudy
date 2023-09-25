function solution(progresses, speeds) {
    let deployDay = []
    let ans = []

    // 작업기간 계산
    for (let i = 0; i < progresses.length; i++) {
        let rest = 100 - progresses[i]
        deployDay.push(Math.ceil(rest / speeds[i]))
    }

    let count = 1
    let currentDay = deployDay[0]

    for (let j = 1; j < deployDay.length; j++) {
        // 앞선 진행한 날과 오늘 날의 남은 날수를 비교       
        if (deployDay[j] <= currentDay) {
            count++
        } else {
            ans.push(count)
            count = 1 // 초기화
            currentDay = deployDay[j] // 비교군 변경
        }
    }
    ans.push(count)

    return ans
}

// 테스트 1 〉	통과 (0.06ms, 33.3MB)
// 테스트 2 〉	통과 (0.20ms, 33.3MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.3MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.23ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.3MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)