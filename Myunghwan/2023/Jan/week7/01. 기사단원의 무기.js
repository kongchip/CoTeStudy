function solution(number, limit, power) {
    let answer = 0;
    let arr = [];
    
    for(let level = 1; level <= number; level++){
        let divisors = 0;
        //각 번호의 약수의 개수 구하기
        for(let i = 1; i <= level/2; i++){
            if(level % i === 0){
                divisors += 1;
            }
        }
        arr.push(divisors + 1)
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] <= limit){
            answer += arr[j]
        } else {
            answer += power
        }
    }
    // console.log(answer)
    // console.log(arr)
    return answer;
}