// 이상한 문자 만들기

function solution(s) {
    let answer = ''
    let arr = s.split(' ')

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                answer += arr[i][j].toUpperCase()
            } else {
                answer += arr[i][j].toLowerCase()
            }
        }
        i < arr.length - 1 ? answer += ' ' : null
    }
    return answer
}

// 테스트 1 〉	통과 (0.19ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.24ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.17ms, 33.4MB)
// 테스트 9 〉	통과 (0.19ms, 33.5MB)
// 테스트 10 〉	통과 (0.22ms, 33.5MB)
// 테스트 11 〉	통과 (0.26ms, 33.5MB)
// 테스트 12 〉	통과 (0.27ms, 33.6MB)
// 테스트 13 〉	통과 (0.27ms, 33.5MB)
// 테스트 14 〉	통과 (0.12ms, 33.6MB)
// 테스트 15 〉	통과 (0.15ms, 33.5MB)
// 테스트 16 〉	통과 (0.24ms, 33.5MB)