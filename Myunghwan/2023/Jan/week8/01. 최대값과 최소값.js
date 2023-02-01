function solution(s) {
    let s_split = s.split(' ')
    let arr = [];
    
    for(let i = 0; i < s_split.length; i++){
        arr.push(Number(s_split[i]))
    }
    
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    
    return `${min} ${max}`
}