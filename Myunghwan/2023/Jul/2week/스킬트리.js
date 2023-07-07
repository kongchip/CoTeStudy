function solution(skill, skill_trees) {
  //answer 변수 선언
  let answer = 0;
  //skill_trees의 배열에서 원소를 하나씩 가져온다.
  for (let tmp of skill_trees) {
    //breakPoint가 true일 경우에만 정답 카운트를 늘린다.
    let breakPoint = true;
    //skill 문자열을 split함수를 통해 배열로 변환시킨다.
    let skills = skill.split('');
    //가져온 스킬트리 원소를 배열로 변환한뒤 1가지 원소씩 가져온다.
    for (let t of tmp.split('')) {
      //먼저 원소가 선행스킬에 포함되는지 확인
      if (skills.includes(t)) {
        //포함되면 가장 앞에 원소가 맞는지 확인
        if (skills[0] === t) {
          skills.shift();
        } else {
          //아니면 정답이 아니므로 breakPoint false로 변환
          breakPoint = false;
          break;
        }
      }
    }
    if (breakPoint === true) {
      answer += 1;
    }
  }
  return answer;
}
