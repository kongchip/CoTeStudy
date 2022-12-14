//K번째수

function solution(array, commands) {

    const result = []

    for (let i = 0; i < commands.length; i++) {
        const [start, end, k] = commands[i]
        const subArray = array.slice(start - 1, end)
        const sortedSubArray = subArray.sort((a, b) => a - b)
        result.push(sortedSubArray[k - 1])
    }


    return result
}


//   테스트 1 〉	통과 (0.07ms, 33.5MB)
//   테스트 2 〉	통과 (0.08ms, 33.5MB)
//   테스트 3 〉	통과 (0.08ms, 33.5MB)
//   테스트 4 〉	통과 (0.07ms, 33.5MB)
//   테스트 5 〉	통과 (0.08ms, 33.5MB)
//   테스트 6 〉	통과 (0.07ms, 33.5MB)
//   테스트 7 〉	통과 (0.09ms, 33.5MB)