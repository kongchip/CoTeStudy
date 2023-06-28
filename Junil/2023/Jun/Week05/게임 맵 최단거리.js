// function solution(maps) {
//     // 현 위치 maps[0][0] 에서 인접한 1의 위치를 찾는다
//     // curr 값 갱신 + count++

//     let ans = []
//     let curr = maps[0][0]

//     for (let i = 0; i < maps.length ; i++){
//         for (let j = 1; j < maps[i].length ; j++){
//             if(maps[i+1][j] === 1){
//                 maps[i+1][j] += + curr
//                 curr = maps[i+1][j]
//             }
//             if(maps[i][j+1] === 1){
//                 maps[i][j+1] += + curr
//                 curr = maps[i][j+1]
//             }
//         }
//     }
//     console.log(maps)
// }

function solution(maps) {
    const yLength = maps.length; // 세로 길이
    const xLength = maps[0].length; // 가로 길이
    const goalY = yLength - 1; // 도착점 세로축
    const goalX = xLength - 1; // 도착점 가로축

    const queue = [[0, 0, 1]]; // [y, x, steps]

    while (queue.length) {
        const [y, x, steps] = queue.shift();


        // 유효성 검사
        if (x < 0 || x >= xLength) continue; // x 축 끝에 위치하면 다음 반복으로 넘어감
        if (y < 0 || y >= yLength) continue;
        if (maps[y][x] === 0) continue; // 현 위치가 0 이면 다음 반복

        if (y === goalY && x === goalX) { // 상대 팀 진영에 도달함으로 steps를 리턴
            return steps;
        }

        maps[y][x] = 0; // 이미 방문한 위치를 0으로 표시함

        // BFS를 위해 상하좌우 모든 위치로 이동하는 걸 큐에 담아줌
        // queue의 y , x 가 4 , 4 로 만들어주기
        queue.push([y + 1, x, steps + 1])
        queue.push([y - 1, x, steps + 1])
        queue.push([y, x + 1, steps + 1])
        queue.push([y, x - 1, steps + 1])

    }

    return -1
}