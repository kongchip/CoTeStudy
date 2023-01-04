function solution(n, lost, reserve) {
    // n = 학생 수 , lost[i] = 잃어버린 학생, reserve[i] = 여벌이 있는 학생
    // reserve[i] - 1 || reserve[i] + 1 만 수업 가능
    // reserve 배열에 lost 하지 않은 학생 번호를 넣어주고, 자신에서 +- 1 ?


    // 도난당하지 않은 학생들 + 여벌 소지 학생 배열 
    let answer = Array.from({ length: n }, (v, i) => i + 1).filter((el) => !lost.includes(el))

    // 여벌이 있는 학생이 누구에게 빌려줄지 => 본인 +-1 하고, 그게 위 배열에 있다면 패스하고 없으면 빌려주기
    for (let i = 0; i < reserve.length; i++) {
        if (!answer.includes(reserve[i] - 1)) {
            answer.push(reserve[i] - 1)
        } else if (!answer.includes(reserve[i] + 1)) {
            answer.push(reserve[i] + 1)
        }
    }

    // n 보다 넘치고, 0번 학생 제거
    answer = answer.filter((el) => el <= n).filter((el) => el !== 0)

    // 중복 제거
    const set = new Set(answer)

    return Array.from(set).length
}

// 테스트 1 〉	실패 (0.13ms, 33.4MB)
// 테스트 2 〉	실패 (0.11ms, 33.4MB)
// 테스트 3 〉	실패 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.5MB)
// 테스트 5 〉	통과 (0.19ms, 33.4MB)
// 테스트 6 〉	실패 (0.13ms, 33.4MB)
// 테스트 7 〉	실패 (0.19ms, 33.4MB)
// 테스트 8 〉	통과 (0.20ms, 33.4MB)
// 테스트 9 〉	통과 (0.19ms, 33.5MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
// 테스트 11 〉	통과 (0.10ms, 33.4MB)
// 테스트 12 〉	실패 (0.10ms, 33.5MB)
// 테스트 13 〉	통과 (0.10ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.4MB)
// 테스트 15 〉	통과 (0.11ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	실패 (0.18ms, 33.4MB)
// 테스트 18 〉	실패 (0.18ms, 33.4MB)
// 테스트 19 〉	실패 (0.19ms, 33.4MB)
// 테스트 20 〉	실패 (0.19ms, 33.4MB)
// 테스트 21 〉	통과 (0.10ms, 33.4MB)
// 테스트 22 〉	통과 (0.11ms, 33.4MB)
// 테스트 23 〉	통과 (0.28ms, 33.4MB)
// 테스트 24 〉	실패 (0.18ms, 33.4MB)
// 테스트 25 〉	통과 (0.19ms, 33.4MB)


function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b)
    reserve.sort((a, b) => a - b)

    const noReserveLost = lost.filter((lost) => !reserve.includes(lost)) // 잃어버리고 여벌이 없는 학생 (아직)
    let hasReserve = reserve.filter((reserve) => !lost.includes(reserve)) // 잃어버리지 않고 여벌이 있는 학생

    const finalLost = noReserveLost.filter((lost) => {
        // 여벌이 있는 학생중에서 바로 옆에 있는 체육복이 없는 학생을 찾기
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) === 1)

        if (!lend) return lost
        // 빌려줬으니 삭제
        hasReserve = hasReserve.filter((reserve) => reserve !== lend)
    });

    // 전체 학생에서 여벌을 빌리지 못한 학생들 제거
    const answer = n - finalLost.length

    return answer
}


// 테스트 1 〉	통과 (0.11ms, 33.5MB)
// 테스트 2 〉	통과 (0.24ms, 33.4MB)
// 테스트 3 〉	통과 (0.20ms, 33.5MB)
// 테스트 4 〉	통과 (0.19ms, 33.4MB)
// 테스트 5 〉	통과 (0.21ms, 33.4MB)
// 테스트 6 〉	통과 (0.10ms, 33.4MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (0.20ms, 33.5MB)
// 테스트 9 〉	통과 (0.11ms, 33.6MB)
// 테스트 10 〉	통과 (0.22ms, 33.4MB)
// 테스트 11 〉	통과 (0.11ms, 33.4MB)
// 테스트 12 〉	통과 (0.11ms, 33.5MB)
// 테스트 13 〉	통과 (0.12ms, 32.8MB)
// 테스트 14 〉	통과 (0.11ms, 32.9MB)
// 테스트 15 〉	통과 (0.11ms, 33.4MB)
// 테스트 16 〉	통과 (0.18ms, 33.4MB)
// 테스트 17 〉	통과 (0.16ms, 33.4MB)
// 테스트 18 〉	통과 (0.16ms, 33.5MB)
// 테스트 19 〉	통과 (0.16ms, 33.5MB)
// 테스트 20 〉	통과 (0.11ms, 33.4MB)
// 테스트 21 〉	통과 (0.11ms, 33.5MB)
// 테스트 22 〉	통과 (0.10ms, 33.4MB)
// 테스트 23 〉	통과 (0.14ms, 33.5MB)
// 테스트 24 〉	통과 (0.18ms, 33.4MB)
// 테스트 25 〉	통과 (0.17ms, 33.4MB)