function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        for(let j=1; j<=Math.floor(food[i]/2); j++){
            answer += i
        }
    }
    
    return answer + 0 + answer.split('').reverse().join('');
}