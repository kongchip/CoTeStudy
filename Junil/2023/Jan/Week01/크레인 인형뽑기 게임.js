function solution(board, moves) {
    // 1,2,3,4,5 (moves[]) => board[i][0] board[i][1] ...
    let stack = []

    for (let i = 0; i < moves.length; i++) {
        // 컬럼으로 풀이
        const column = board.map((row) => row[moves[i] - 1])
        // 컬럼에서 0을 지나쳐서 가장 상단에 있는 인형 뽑기
        const crane = column.find((el) => el !== 0) // 통과 못하면 undefined임

        // 뽑아간 자리 0 으로 만들기
        if (crane !== undefined) {
            board[column.indexOf(crane)][moves[i] - 1] = 0
            stack.push(crane)
        }
    }

    // 근접한 같은 두 수를 터쳐야 함
    let count = 0
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === stack[i + 1]) {
            count += 2
            stack.splice(i, 2)
            i -= 2
        }
    }
    return count
}

// 테스트 1 〉	통과 (0.22ms, 33.4MB)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	통과 (0.22ms, 33.5MB)
// 테스트 4 〉	통과 (21.69ms, 35.7MB)
// 테스트 5 〉	통과 (0.23ms, 33.5MB)
// 테스트 6 〉	통과 (0.41ms, 33.4MB)
// 테스트 7 〉	통과 (0.28ms, 33.5MB)
// 테스트 8 〉	통과 (0.52ms, 33.5MB)
// 테스트 9 〉	통과 (0.81ms, 33.6MB)
// 테스트 10 〉	통과 (0.57ms, 33.5MB)
// 테스트 11 〉	통과 (1.03ms, 33.7MB)


function solution(board, moves) {
    // 1,2,3,4,5 (moves[]) => board[i][0] board[i][1] ...
    let stack = []
    let count = 0
    for (let i = 0; i < moves.length; i++) {
        // 컬럼으로 풀이
        const column = board.map((row) => row[moves[i] - 1])
        // 컬럼에서 0을 지나쳐서 가장 상단에 있는 인형 뽑기
        const crane = column.find((el) => el !== 0) // 통과 못하면 undefined임

        // 뽑아간 자리 0 으로 만들기
        if (stack[stack.length - 1] === crane) { // 아래 터치는 로직 옮김
            stack.pop()
            count += 2
        } else if (crane !== undefined) {
            board[column.indexOf(crane)][moves[i] - 1] = 0
            stack.push(crane)
        }
    }
    // 근접한 같은 두 수를 터쳐야 함
    // for (let i = 0; i < stack.length; i++){
    //     if(stack[i] === stack[i + 1]){
    //         count += 2
    //         stack.splice(i, 2)
    //         i -= 2
    //     }
    // }
    return count
}
// 멸망... 테케는 통과했는듀ㅠㅠㅠ
// 테스트 1 〉	실패 (0.20ms, 33.5MB)
// 테스트 2 〉	실패 (0.19ms, 33.5MB)
// 테스트 3 〉	통과 (0.21ms, 33.6MB)
// 테스트 4 〉	통과 (2.09ms, 35.8MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	실패 (0.19ms, 33.6MB)
// 테스트 7 〉	실패 (0.25ms, 33.5MB)
// 테스트 8 〉	실패 (0.57ms, 33.7MB)
// 테스트 9 〉	실패 (0.56ms, 33.6MB)
// 테스트 10 〉	실패 (0.92ms, 33.6MB)
// 테스트 11 〉	실패 (1.37ms, 35.8MB)
