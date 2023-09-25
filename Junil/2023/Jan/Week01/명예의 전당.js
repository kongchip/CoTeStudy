function solution(k, score) {
    // score 를 갱신하며, 최저점을 answer arr 에 담아서 리턴
    // k 는 최저점을 갱신하기위한 명예의 전당.length
    const arr = []
    const honor = []

    for (let i = 0; i < score.length; i++) {
        if (honor.length >= k) { // 명예의 전당에 k만큼 값을 넣어주기
            // honor 배열의 최저점이 score[i] 보다 작다면, 그 작은 요소를 제거하고 score[i]를 넣어준다.
            Math.min(...honor) < score[i] ? honor.splice(honor.indexOf(Math.min(...honor)), 1, score[i]) : null
        } else {
            // honor 초기값 설정 (k만큼 일단 집어 넣기)
            honor.push(score[i])
        }
        // 주마다 발표점수를 arr에 넣어주기
        arr.push(Math.min(...honor))
    }

    return arr
}

// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.24ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.16ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉	통과 (0.14ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.5MB)
// 테스트 12 〉	통과 (0.90ms, 33.6MB)
// 테스트 13 〉	통과 (1.03ms, 33.5MB)
// 테스트 14 〉	통과 (0.78ms, 33.5MB)
// 테스트 15 〉	통과 (1.64ms, 33.6MB)
// 테스트 16 〉	통과 (1.10ms, 33.6MB)
// 테스트 17 〉	통과 (1.04ms, 33.7MB)
// 테스트 18 〉	통과 (0.97ms, 33.7MB)
// 테스트 19 〉	통과 (0.34ms, 33.8MB)
// 테스트 20 〉	통과 (0.32ms, 33.7MB)
// 테스트 21 〉	통과 (0.30ms, 33.7MB)
// 테스트 22 〉	통과 (0.34ms, 33.7MB)
// 테스트 23 〉	통과 (0.33ms, 33.6MB)
// 테스트 24 〉	통과 (0.44ms, 33.6MB)
// 테스트 25 〉	통과 (0.37ms, 33.6MB)
// 테스트 26 〉	통과 (0.05ms, 33.4MB)