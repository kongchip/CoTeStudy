function solution(n, arr1, arr2) {
    let result = [];
    
    for(let i = 0; i < arr1.length; i++){
        const point = (arr1[i] | arr2[i]).toString(2).padStart(n,0).replace(/1/gi,'#').replace(/0/gi," ")
        result.push(point)
    }
    return result
}