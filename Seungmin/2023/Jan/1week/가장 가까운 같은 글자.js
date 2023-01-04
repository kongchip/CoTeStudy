function solution(s) {
    let result = [];
    let obj = {};

    for(let i = 0; i<s.length; i++){

        obj[s[i]] === undefined ? result.push(-1) : result.push(i - obj[s[i]]);
        
        obj[s[i]] = i;
    }
    
    return result;
}