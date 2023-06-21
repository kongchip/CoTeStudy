function solution(N, stages) {
    // N 은 스테이지 개수 
    // stages.length === 총 플레이어의 수
    // stages[i] => [idx] === 도전자 , stages[i] === i 도전자가 머물고 있는 stage
    // 1 ~ N 까지 반복문 돌리면서 도전자가 머무는 stage 와 같다면 그 수 / stages.length <= 이게 실패율
    // 실패율을 배열에 넣고 내림차순 정렬 (스테이지로 바꾸는 로직 필요)
    let answer = []
    for (let i = 1; i <= N; i++) {
        // 그 스테이지에 멈춘 사람
        let count = 0
        // 살아남은 사람
        const success = stages.filter((el, idx) => el >= i).length

        stages.filter((el, idx) => el === i ? count++ : null)

        // 실패율
        let rate = 0
        if (success > 0) {
            rate = count / success
        }
        answer.push({ stage: i, rate })
    }
    // let arr = []
    // console.log(answer)
    // answer.reduce((acc, cur) => {
    //     arr.push(cur/acc)
    //     return acc - cur
    // }, stages.length)

    // 내림차순으로 정렬한 배열의 stage값들로 배열 생성 
    return answer.sort((a, b) => b.rate - a.rate).map((el) => el.stage)

}


// 테스트 1 〉	통과 (0.22ms, 33.6MB)
// 테스트 2 〉	통과 (0.89ms, 33.7MB)
// 테스트 3 〉	통과 (192.75ms, 38.9MB)
// 테스트 4 〉	통과 (1103.20ms, 66.2MB)
// 테스트 5 〉	통과 (4437.47ms, 73MB)
// 테스트 6 〉	통과 (5.18ms, 36MB)
// 테스트 7 〉	통과 (66.18ms, 37MB)
// 테스트 8 〉	통과 (1185.99ms, 67.8MB)
// 테스트 9 〉	통과 (5472.49ms, 72.8MB)
// 테스트 10 〉	통과 (504.68ms, 61.9MB)
// 테스트 11 〉	통과 (936.23ms, 65.2MB)
// 테스트 12 〉	통과 (707.30ms, 64.7MB)
// 테스트 13 〉	통과 (2027.74ms, 70.5MB)
// 테스트 14 〉	통과 (0.34ms, 33.6MB)
// 테스트 15 〉	통과 (56.21ms, 46.4MB)
// 테스트 16 〉	통과 (15.42ms, 38.3MB)
// 테스트 17 〉	통과 (73.60ms, 46.5MB)
// 테스트 18 〉	통과 (15.94ms, 38.2MB)
// 테스트 19 〉	통과 (6.56ms, 35.9MB)
// 테스트 20 〉	통과 (28.03ms, 39.8MB)
// 테스트 21 〉	통과 (45.24ms, 42.4MB)
// 테스트 22 〉	통과 (4624.15ms, 67.2MB)
// 테스트 23 〉	통과 (82.53ms, 49.6MB)
// 테스트 24 〉	통과 (214.97ms, 57MB)
// 테스트 25 〉	통과 (0.11ms, 33.5MB)
// 테스트 26 〉	통과 (0.10ms, 33.5MB)
// 테스트 27 〉	통과 (0.10ms, 33.5MB)