function solution(babbling) {
    // babbling arr 를 반복문으로 돌려서 arr 에 담겨진 단어가 등장하면 해당 단어에서 제거
    // 결과적으로 "" 가 되면 제거하고 원래 babbling.length에서 빼줌

    const arr = ["aya", "ye", "woo", "ma"]
    let count = 0
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (babbling[i].includes(arr[j])) {
                // arr[j] 가 있는 마지막 인덱스를 구해야 substring 쓸 수 있음 => indexOf 값에 arr[j].length 더하기
                // replace 가 더 쉬운듯 => 실패 ["woayao"] 태케 추가
                // babbling[i] = babbling[i].replace(arr[j],'')
                babbling[i] = babbling[i].split(arr[j]).join(".")
            }
        }
        if (babbling[i].match(/^\.+$/)) count++
    }
    return count
}

// 테스트 1 〉	실패 (0.30ms, 33.5MB)
// 테스트 2 〉	통과 (0.23ms, 33.5MB)
// 테스트 3 〉	통과 (0.31ms, 33.5MB)
// 테스트 4 〉	통과 (0.20ms, 33.4MB)
// 테스트 5 〉	실패 (0.24ms, 33.5MB)
// 테스트 6 〉	실패 (0.20ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)
// 테스트 8 〉	실패 (0.24ms, 33.4MB)
// 테스트 9 〉	통과 (0.23ms, 33.5MB)
// 테스트 10 〉	통과 (0.22ms, 33.5MB)
// 테스트 11 〉	실패 (0.40ms, 33.5MB)
// 테스트 12 〉	실패 (0.60ms, 33.5MB)
// 테스트 13 〉	실패 (0.47ms, 33.5MB)
// 테스트 14 〉	실패 (0.57ms, 33.5MB)
// 테스트 15 〉	통과 (0.45ms, 33.5MB)
// 테스트 16 〉	통과 (0.45ms, 33.6MB)
// 테스트 17 〉	실패 (0.47ms, 33.5MB)
// 테스트 18 〉	실패 (0.71ms, 33.5MB)
// 테스트 19 〉	통과 (0.40ms, 33.5MB)
// 테스트 20 〉	통과 (0.36ms, 33.5MB)