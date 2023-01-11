// [1,4,7] [2,5,8,0] [3,6,9]
// 숫자가 어느 배열에 포함되는지 확인
// 숫자가 포함된 배열의 인덱스가 0이면 +'L', 왼손 위치를 해당 숫자로 갱신
// 숫자가 포함된 배열의 인덱스가 2이면 +'R', 오른손 위치를 해당 숫자로 갱신
// 숫자가 포함된 배열의 인덱스가 1인 경우
// 왼손 숫자가 1,4,7 중에 있으면 -> 왼손거리 = ㅣ숫자 인덱스 - 왼손숫자 인덱스ㅣ + 1
// 없으면 -> 왼손거리 = ㅣ숫자 인덱스 - 왼손숫자 인덱스ㅣ
// 오른손 숫자가 3,6,9 중에 있으면 -> 왼손처럼 오른손거리 구하기
// 왼손거리, 오른손거리 비교
function solution(numbers, hand) {
    let result = '';
    // 숫자까지의 왼손, 오른손 거리
    let dLeft = 0, dRight = 0;
    // 왼손, 오른손이 현재 위치한 숫자
    let curLeft = '*', curRight = '#';
    let keypad = [[1, 4, 7, '*'], [2, 5, 8, 0], [3, 6, 9, '#']];

    for(let i=0; i<numbers.length; i++){
        // 숫자가 포함된 열
        let numCol = keypad.findIndex(el => el.includes(numbers[i]) === true);

        if(numCol === 0){
            result += 'L';
            curLeft = numbers[i];
        }
        else if(numCol === 2){
            result += 'R';
            curRight = numbers[i];
        } 
        else {
            // 왼손 거리
            if(curLeft === 1 || curLeft === 4 || curLeft === 7 || curLeft === '*'){
                dLeft = Math.abs(keypad[numCol].indexOf(numbers[i]) - keypad[0].indexOf(curLeft)) + 1;
            } else {
                dLeft = Math.abs(keypad[numCol].indexOf(numbers[i]) - keypad[numCol].indexOf(curLeft));
            }
            // 오른손 거리
            if(curRight === 3 || curRight === 6 || curRight === 9 || curRight === '#'){
                dRight = Math.abs(keypad[numCol].indexOf(numbers[i]) - keypad[2].indexOf(curRight)) + 1;
            } else {
                dRight = Math.abs(keypad[numCol].indexOf(numbers[i]) - keypad[numCol].indexOf(curRight));
            }

            if((dLeft === dRight && hand === 'left') || dLeft < dRight){
                result += 'L';
                curLeft = numbers[i];
            } 
            else if((dLeft === dRight && hand === 'right') || dRight < dLeft ){
                result += 'R';
                curRight = numbers[i];
            }
        }
    }
    return result;
}