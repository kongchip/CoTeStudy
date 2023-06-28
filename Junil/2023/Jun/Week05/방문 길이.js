// function solution(dirs) {
//     // 왔던 좌표를 기억하고 
//     // y , x = -5 ~ 5
//     // 특정 좌표에서 다음 좌표로 이동할 때 마다 길이 다름을 망각함.........
//     let curr = [0,0]

//     let ans = []

//     for (let i = 0; i < dirs.length; i ++){

//         if(dirs[i] === "U" && curr[0] < 5 && curr[0] >= -5){
//             curr[0] = curr[0] + 1
//         }
//         if(dirs[i] === "D" && curr[0] < 5 && curr[0] >= -5){
//             curr[0] = curr[0] - 1
//         }
//         if(dirs[i] === "R" && curr[1] <= 5 && curr[1] > -5){
//             curr[1] = curr[1] + 1
//         }
//         if(dirs[i] === "L" && curr[1] <= 5 && curr[1] > -5){
//             curr[1] = curr[1] - 1
//         }
//         ans.push([...curr])
//     }

//     function removeDup(arr) {
//         return [...new Set(arr.join("|").split("|"))]
//             .map((v) => v.split(","))
//             .map((v) => v.map((a) => +a));
//     }
//     console.log(ans)
//     console.log(removeDup(ans))

//     return removeDup(ans).length

// }

function solution(dirs) {
    const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };

    let cur = [0, 0]; // [x, y]
    const moveList = new Set();

    for (const dir of dirs) {
        const nextX = cur[0] + move[dir][0];
        const nextY = cur[1] + move[dir][1];

        if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

        // 같은 길 방지를 위해 두번 넣어 줌
        // ex [0 , 0] => [0 , 1] / [1 , 1] => [0 , 1]
        moveList.add(`${cur[0]}${cur[1]}${nextX}${nextY}`);
        moveList.add(`${nextX}${nextY}${cur[0]}${cur[1]}`);

        cur = [nextX, nextY]; // 이동 좌표

    }

    return moveList.size / 2;
}