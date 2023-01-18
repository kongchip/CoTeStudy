function solution(numbers, hand) {
    const keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
    }
    const len = numbers.length;
  
    let answer = '';
    // 처음 엄지손가락의 위치
    let leftFinger = '*';
    let rightFinger = '#';
  
    for (let i = 0; i < len; i++) {
      let num = numbers[i];
      // 1, 4, 7
      if (num % 3 === 1) {
        // 'L'을 더해주고 해당 숫자를 leftFinger에 
        // 재할당(왼쪽 엄지손가락 위치 기억)
        answer += 'L';
        leftFinger = num;
      }
      // 0을 제외한 3, 6, 9
      else if (num !== 0 && num % 3 === 0) {
        // 'R'을 더해주고 해당 숫자를 rightFinger에 
        // 재할당(오른쪽 엄지손가락 위치 기억)
        answer += 'R';
        rightFinger = num;
      }
      // 2, 5, 8, 0
      else {
        answer += getDistance(keypad, num, hand, leftFinger, rightFinger);
        // answer 문자열의 마지막 index를 확인 후 2, 5, 8, 0 재할당(위치 기억)
        answer[answer.length - 1] === 'L'
          ? (leftFinger = num)
          : (rightFinger = num);
      }
    }
  
    return answer;
  }
  
  function getDistance(keypad, num, hand, leftFinger, rightFinger) {
    const handed = hand === 'left' ? 'L' : 'R';
    const left =
      Math.abs(keypad[num][0] - keypad[leftFinger][0]) +
      Math.abs(keypad[num][1] - keypad[leftFinger][1]);
    const right =
      Math.abs(keypad[num][0] - keypad[rightFinger][0]) +
      Math.abs(keypad[num][1] - keypad[rightFinger][1]);
  
    if (left === right) return handed;
  
    return left < right ? 'L' : 'R';
  }