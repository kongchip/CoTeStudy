function solution(dartResult) {
    //3. S = 곱1 | D = 2제곱 | T = 3제곱
    //4. * = 이전점수 및 해당점수 2배 | # = 해당점수 -
    //5. * = 첫번째 기회에서 가능 -> 해당점수만 2배
    //6. * = 중첩가능 -> 4배
    //7. * = #과 중첩가능 -> -2배
    //8. S, D, T는 하나씩 존재
    //9. *, #은 점수마다 존재하거나 안할 수 있다
    
    //예제 4번 1S * 2T * 3S = (1*1)*2 *2 + (2*2*2)*2 + 3
    
    let result = 0;
    let arr = [];
    let sum = 0;
    
    for(let i=0; i<dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9 ) {
            if( dartResult[i] == 1 && dartResult[i+1] == 0 ) {
                sum = 10;
                i++;
            } 
            else sum = dartResult[i];
        }
        else if(dartResult[i] === "S") arr.push(sum);
        else if (dartResult[i] === "D") arr.push(Math.pow(sum,2));
        else if (dartResult[i] === "T") arr.push(Math.pow(sum,3));
        else if (dartResult[i] === "*") {
        arr[arr.length-1] *= 2;
        arr[arr.length-2] *= 2;
        } 
        else if (dartResult[i] === "#") arr[arr.length-1] *= -1;
    }
    for(let i=0; i<arr.length; i++) {
    result += Number(arr[i]);
    }
    return result;
}