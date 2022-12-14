function solution(d, budget) {
    
    let arr = d.sort((a,b)=> a-b);
    
    for(let i = 0; i<arr.length; i++){
        if(budget >= arr[i]) budget = budget - arr[i];
        else return i
    }
    
    return d.length;
}