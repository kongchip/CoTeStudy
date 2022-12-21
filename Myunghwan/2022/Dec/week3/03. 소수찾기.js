function solution(n) {
    let count = 0;
    let result = 0;
    
    for(let i = 2; i <= n; i++){
        count = 0;
        for(let j = 1; j <= n; j++){
            if(i % j === 0) count++;
        }
        if(count === 2) result++
    }
    return result;
}
// 머리가 안돌아가 포기했습니다.