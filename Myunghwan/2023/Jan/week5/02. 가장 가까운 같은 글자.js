function solution(s) {
    let answer = [];
    let arr = [];
    let arr2 = []
    
    // "appleae" => [-1,-1,1,-1,-1,5,2]
    for(let i = 0; i < s.length; i++){
        if(!answer.includes(s[i])){
            answer.push(s[i])
            arr.push(-1)
            continue;
        } 
        if(answer.includes(s[i])){
            arr.push(answer.length - answer.lastIndexOf(s[i]));
            answer.push(s[i]);
        }
    }
    
    return arr;
}