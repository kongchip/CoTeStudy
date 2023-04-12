// function solution(arr) {
//     let answer = 0;
//     let i = 1;
//     arr.sort((a, b) => b - a);
//     let memo = arr[0];
//     while (answer === 0) {
//        for(let j = 1; j < arr.length; j++) {
//            if (memo % arr[j] !== 0) {
//                i++;
//                memo = arr[0] * i;
//                break;
//            } else {
//                answer = memo;
//            }
//        }
        
//     }
//     console.log(answer, i)
//     return answer;
// }

function solution(arr) {
    let answer = 0;
    
    // 한 숫자를 계속 곱해주고, 나눈 나머지의 값이 모두 0으로 떨어지면
    // 모든 값의 최소공배수가 구해진다.
    let n = 1, flag = false;
    while(!flag) {
        n++;
        for(let i = 1; i < arr.length; i++){
            if((arr[0] * n) % arr[i]  === 0){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    answer = arr[0] * n;
    return answer;
}

/**
arr를 내림차순 정렬
0번째 인덱스의 요소를 다른애들로 나눠봄
나누어떨어지지 않으면 곱하기.
반복 -> 모두 나누어 떨어지면 그게 최소공배수. 반복종료.
*/

/**
2*7
2*2*2
2*3
2
168 = 2*2*2*3*7
*/