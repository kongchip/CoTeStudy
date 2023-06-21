// function solution(land) {
//     // land[0] 중 가장 큰 숫자의 인덱스를 구함
//     // land[1] 중 가장 큰 숫자의 인덱스를 찾고 위 인덱스와 같다면 다음 큰 숫자를 찾음
//     let ans = 0
//     let biggestNum = 0

//     for (let i = 0; i < land.length; i++){

//         for (let j = 0; j < land[i].length; j++){
//             if(j !== land[i].findIndex((el) => el === biggestNum)){
//                 biggestNum = Math.max(...land[i])
//             }
//         }
//         ans += biggestNum
//         biggestNum = 0
//     }
//     return ans
// }

function solution(land) {
    const N = land.length;
    const dp = Array.from({ length: N }, () => [0, 0, 0, 0]);

    dp[0] = land[0];

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            dp[i][j] = land[i][j] + Math.max(...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1));
        }
    }

    console.log(dp)

    return Math.max(...dp[N - 1]);
}

