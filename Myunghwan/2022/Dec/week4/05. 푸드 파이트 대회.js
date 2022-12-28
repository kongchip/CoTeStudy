function solution(food) {
    // [1,3,4,6]
    // foot[1] = 3개
    // foot[2] = 4개
    // foot[3] = 6개
    // -> 1,1,1, 2,2,2,2, 3,3,3,3,3,3
    // -> 1,2,2,3,3,3 | 3,3,3,2,2,1
    let answer= []
    for(let i = 1; i < food.length; i++){
        if(food[i] % 2 === 1) {
            answer.push(String(i).repeat((food[i] - 1) / 2))
        } else {
            answer.push(String(i).repeat((food[i]) / 2))
        }
    }
    return `${answer.join('')}0${answer.reverse().join('')}`
}