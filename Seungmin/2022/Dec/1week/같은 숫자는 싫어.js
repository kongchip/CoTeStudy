function solution(arr)
{
    let answer = [];
    let temp;
    
    for(let i=0; i<arr.length; i++){
        if(temp !== arr[i]){
            answer.push(arr[i])
            temp = arr[i]
        }
    }
    
    
    return answer;
}