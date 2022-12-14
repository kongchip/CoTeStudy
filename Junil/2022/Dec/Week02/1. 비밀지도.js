// [1차] 비밀지도

function solution(n, arr1, arr2) {

    let map = new Array(n)

    for (let i = 0; i < n; i++) {
        map[i] = new Array(n)
    }

    for (let i = 0; i < n; i++) {
        let row1 = arr1[i].toString(2).padStart(n, "0")
        let row2 = arr2[i].toString(2).padStart(n, "0")
        for (let j = 0; j < n; j++) {
            map[i][j] = (row1[j] === "1" || row2[j] === "1") ? "#" : " "
        }
    }

    return map.map(row => row.join(""))
}

//   테스트 1 〉	통과 (0.18ms, 33.6MB)
// 테스트 2 〉	통과 (0.21ms, 33.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.6MB)
// 테스트 4 〉	통과 (0.19ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.7MB)
// 테스트 7 〉	통과 (0.17ms, 33.6MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)