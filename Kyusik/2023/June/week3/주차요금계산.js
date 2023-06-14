function solution(fees, records) {
  const carObj = {};
  const deadLine = 23 * 60 + 59; // 최종 출차시간
  const [baseTime, baseFee, overTime, overFee] = fees; // 요금 계산 변수

  const calcPrice = (time) => {
    // 기본시간 이하는 기본요금
    if (time <= baseTime) return baseFee;
    // 기본시간 초과는 초과비용 계산
    const calcTime = time - baseTime;
    return baseFee + Math.ceil(calcTime / overTime) * overFee;
  };

  const calcTime = (timeS) => {
    const [HH, MM] = timeS.split(':');
    return HH * 60 + +MM;
  };

  records.forEach((record) => {
    const [timeS, id, type] = record.split(' ');
    const time = calcTime(timeS);
    // 객체의 프로퍼티로 저장 in:입차 시간,total:총 주차 시간,type:출차여부
    carObj[id] = carObj[id] || { times: 0, remain: null };
    if (type === 'IN') carObj[id].remain = time;
    else {
      // 데이터 갱신
      carObj[id].times += time - carObj[id].remain;
      carObj[id].remain = null;
    }
  });

  // 작은 번호순 정렬
  const ids = Object.keys(carObj).sort((a, b) => +a - b);
  console.log(ids);
  return ids.map((id) => {
    // 출차처리가 안되있다면 요금 갱신
    if (carObj[id].remain !== null)
      carObj[id].times += deadLine - carObj[id].remain;
    return calcPrice(carObj[id].times);
  });
}
