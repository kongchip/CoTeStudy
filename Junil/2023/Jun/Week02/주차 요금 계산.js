function solution(fees, records) {
    // return 은 요금 총합이 아니라 차량 번호 오름차순
    // 단위 시간은 올림처리 ex 단위 10분 : 주차 12분 => 20분

    // Goal : records 요소를 반복문을 돌려서 obj에 {주차번호 : 0000 , 입차 : 334 , 출차 : 479 , 주차 요금 : 5000}
    // 할당시키고 주차 요금 오름차순으로 정렬한 배열을 만들어 리턴

    // 1. 반복문에서 time, id, status로 분류시키고
    // 2. obj.id = id 로 번호를 부여
    // 3. 해당 id 와 그 status로 조건문을 만들어서 입차시간과 출차시간을 할당
    // 4. math.abs (입차 - 출차) 가 fees[0] 보다 작으면 주차요금 = fees[1] 
    // 5. 크다면  주차요금 = math.ceil (나머지 시간 % fees[2]) * fees[3] + fees[1]   


    let obj = {}
    let time = 23 * 60 + 59

    for (let i = 0; i < records.length; i++) {
        const [time, id, status] = records[i].split(' ')
        const [hour, minute] = time.split(":")
        let timeSpent = Number(hour) * 60 + Number(minute)
        console.log(timeSpent)
        obj.id = id
    }
    console.log(obj)

}