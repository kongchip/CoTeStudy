function solution(d, budget) {
    let dSort = d.sort((a,b) => a - b);
    let result = 0, sum = 0;
    
    for(let i = 0; i < d.length; i++){
        result++;
        sum += dSort[i]
     if(sum > budget) 
        result--;
}
    return result
}
