const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim().split("\n")


let size = input.shift().split(' ').map((el) => Number(el))


// 일정 구간의 체스판 패턴을 잘라내서 붙혀도 되나?
// "BW ... " "WB ... " 을 미리 만들고 변경?

const line = ["WBWBWBWB", "BWBWBWBW"]
const answer = []


for (let i = 0 ; i <= size[0] - 8; i++ ){
    for (let j = 0 ; j <= size[1] - 8 ; j++){

        for (let z = 0 ; z < 2 ; z++){ // 라인 패턴을 확인하는 반복문
            let count = 0

            for (let x = 0; x < 8 ; x++){
                for (let y = 0 ; y < 8 ; y++){
                    const current = input[i + x][j + y]
                    if( current !== line[(x + z) % 2][y] ) count++ // 라인 패턴을 맞추려고 할 때마다 카운트가 증가함
                    
                }
            }

            answer.push(count) // 그렇게 패턴을 고친 카운트가 배열에 들어감
        }
    }
}


console.log(Math.min(...answer))