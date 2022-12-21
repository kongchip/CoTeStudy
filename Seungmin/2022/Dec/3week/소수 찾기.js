function solution(n) {   
    let answer = 0;
    let check = true;
    
    //2부터 n까지 반복문
    for(let i=2; i<=n; i++){
        for(let j=2; j<=Math.floor(Math.sqrt(i)); j++){
            // 1과 자신 외의 수로 나누어 떨어지지 않으면 소수
            if(i%j === 0) {
                check = false;
                break;
            }
        }
        // check가 true면 answer 증가
        if(check) answer++;

        //check 초기화
        check = true;
    }
    
    return answer;
}