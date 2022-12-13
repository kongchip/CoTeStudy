function solution(n) {
    let result = n.toString(3).split('').reverse().join('')
    return parseInt(result, 3)
}
