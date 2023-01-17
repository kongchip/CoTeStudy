function solution(survey, choices) {
  const choice = { 1: 3, 2: 2, 3: 1, 4: 0, 5: -1, 6: -2, 7: -3 };
  const resultObj = { RT: 0, CF: 0, JM: 0, AN: 0 };
  let resultStr = "";

  for (let i = 0; i < survey.length; i++) {
    // survey의 문자열이 정순이면 choice객체의 해당 점수에 더해줌.
    if (
      survey[i] === "RT" ||
      survey[i] === "CF" ||
      survey[i] === "JM" ||
      survey[i] === "AN"
    ) {
      resultObj[survey[i]] += choice[choices[i]];
    }
    // survey의 문자열이 역순이면 choice객체의 해당 점수에 빼줌.
    else if (survey[i] === "TR") resultObj.RT -= choice[choices[i]];
    else if (survey[i] === "FC") resultObj.CF -= choice[choices[i]];
    else if (survey[i] === "MJ") resultObj.JM -= choice[choices[i]];
    else if (survey[i] === "NA") resultObj.AN -= choice[choices[i]];
  }

  // resultObj의 속성값이 0보다 크면 키의 앞글자를, 0보다 작으면 키의 뒷글자를 선택.
  for (const prop in resultObj) {
    if (resultObj[prop] >= 0) resultStr += prop[0];
    else resultStr += prop[1];
  }
  return resultStr;
}
