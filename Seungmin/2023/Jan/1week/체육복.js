// 1. -1 먼저 해보고 없으면 +1해보기
// 2. 일치하는 reserve의 요소를 새로운 배열에 저장
// 3. 다음요소에 1번을 다시 수행
// 4. 일치하는 요소가 있으면 새로운 배열에 있는지 확인
// 5. 없으면 추가
// 6. 1~5를 반복 후, n - lost의 길이 - 새로운 배열의 길이를 리턴
// 7. 여벌이 있는 애가 도난 당했을 경우!!!!!

function solution(n, lost, reserve) {
    let arr = [];  
    let newLost = lost.filter(el => reserve.includes(el) === false);
    let newReserve = reserve.filter(el => lost.includes(el) === false);
    let leng = newLost.length;
    
    newLost.sort((a, b) => a - b);
    newReserve.sort((a, b) => a - b);

    for(let i=0; i<leng; i++){
        let idx = newReserve.indexOf(newLost[i]-1);

        if(idx !== -1 && !arr.includes(newReserve[idx])){
            arr.push(newReserve[idx]);
        } else {
            idx = newReserve.indexOf(newLost[i]+1);

            if(idx !== -1 && !arr.includes(newReserve[idx])){
                arr.push(newReserve[idx]);
            }
        }
    }

    return n - leng + arr.length;
}