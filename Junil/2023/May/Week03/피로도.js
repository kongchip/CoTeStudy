function solution(k, dungeons) {
    // 중요도 ??
    // 1. 입장 피로도 
    // 2. 소모 피로도
    // a - b 순 sort ?

    dungeons = dungeons.sort((a, b) => {
        return a[0] - b[1]
    })

    let count = 0

    for (let i = 0; i < dungeons.length; i++) {
        if (k >= dungeons[i][0]) {
            k -= dungeons[i][1]
            count++
        } else break // 필요 피로도를 충족하지 못하면 던전을 탐험할 수 없으므로 종료

    }
    return count

}