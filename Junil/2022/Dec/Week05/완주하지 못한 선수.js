// function solution(participant, completion) {

//     for (let i = 0; i < completion.length; i++){
//         participant.splice(participant.indexOf(completion[i]),1)
//     }

//     return participant[0]
// }
// 날먹 실패
// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.7MB)
// 테스트 3 〉	통과 (0.25ms, 33.7MB)
// 테스트 4 〉	통과 (0.76ms, 33.8MB)
// 테스트 5 〉	통과 (0.75ms, 33.7MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)
// 테스트 5 〉	실패 (시간 초과)

function solution(participant, completion) {
    const obj = {}

    for (const runner of completion) {
        obj[runner] = (obj[runner] || 0) + 1
    }

    for (const person of participant) {
        //obj[person] 가 undefined (completion에 없거나), 동명이인이 중 한 사람이 아니라면
        if (!obj[person] || obj[person] === 0) {
            return person
            // 동명이인 제거
        } else {
            obj[person]--
        }

    }

}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.29ms, 33.6MB)
// 테스트 4 〉	통과 (0.44ms, 33.9MB)
// 테스트 5 〉	통과 (0.44ms, 33.7MB)
// 효율성  테스트
// 테스트 1 〉	통과 (46.24ms, 55.1MB)
// 테스트 2 〉	통과 (49.30ms, 58.8MB)
// 테스트 3 〉	통과 (24.74ms, 57MB)
// 테스트 4 〉	통과 (70.91ms, 70.9MB)
// 테스트 5 〉	통과 (87.22ms, 70.8MB)