function solution(s) {
  var answer = [];
  let strList = s.replace('{{', '').replace('}}', '').split('},{');
  let setList = [];
  for (let i = 0; i < strList.length; i++) {
    setList.push(strList[i].split(','));
  }
  setList.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else {
      return -1;
    }
  });
  answer.push(parseInt(setList[0][0]));
  for (let i = 1; i < setList.length; i++) {
    let ele = getEle(setList[i], answer);
    answer.push(ele);
  }
  return answer;
}
function getEle(set, answer) {
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      set = set.filter((ele) => ele != answer[j]);
    }
  }
  return parseInt(set[0]);
}
