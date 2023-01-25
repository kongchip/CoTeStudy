function solution(s) {
    let answer = s.split(' ').map(el => el.substr(0,1).toUpperCase() + el.substr(1).toLowerCase())
    
    return answer.join(' ')
}