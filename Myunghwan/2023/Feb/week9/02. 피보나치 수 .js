function solution(n) {
    let result = [];
    
    for(let i =0; i <= n;i++){   
        if ( i < 2 ) result.push(i)
        
        else {
            let sum = result[i-2] + result[i-1];
            result.push(sum % 1234567)
        }
    }
    // console.log(result)
    let answer = result[n] % 1234567
    
    return answer;
}