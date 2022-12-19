function solution(d, budget) {
    let d_sort = d.sort((a,b) => a - b);
    let result = 0, sum = 0;
    
    for(let i = 0; i < d.length; i++){
        result++;
        sum += d_sort[i]
     if(sum > budget) 
        result--;
}
    return result
}
