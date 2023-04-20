// function solution(k, tangerine) {
//     // 배열안에 있는 ele의 종류중에서 가장 그 합이 적은 걸 빼서 length === k 와 같을 때 count 리턴

//     let obj = {}
//     let answer = 0

//     // 크기에 따라서 obj 화
//     for (let i = 0; i < tangerine.length; i++) {
//         const t = tangerine[i]
//         obj[t] = obj[t] ? obj[t] + 1 : 1
//     }

//     // 작은 갯수순으로 정렬
//     const sizes = Object.keys(obj).sort((a, b) => obj[a] - obj[b])


//     for (const t of sizes) {
//         if (k > obj[t]) {
//             k -= obj[t]
//             answer++
//         } else {
//             break
//         }
//     }

//     return answer
// }


function solution(k, tangerine) {
    let answer = 0;
    const tDict = {};
    // 귤 객체를 초기화 해줍니다
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
    // 값만을 도출하여 내림차순으로 정렬해 줍니다 - 키는 모두 다르기에
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    // 필요한 귤만큼 가짓수를 더해줍니다
    for (const t of tArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}