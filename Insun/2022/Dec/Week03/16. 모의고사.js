function solution(answers) {
  // 수포자 1: 1,2,3,4,5 반복
  // 수포자 2: 2,1,2,3,2,4,2,5 반복
  // 수포자 3: 3,3,1,1,2,2,4,4,5,5 반복
  // answers배열의 길이만큼 반복되는 수도 늘어나야함 -> No! 배열을 반복해서 더하는게 아니라 index를 0부터 다시 돌리면 됨(ㅜㅜ)
  // 수포자 1,2,3이 찍은 답과 정답을 비교해서 맞은 답의 개수를 알아내야함
  // 수포자 1,2,3의 답 개수를 비교한 후 1등을 리턴
  // 같이 1등을 할 경우 오름차순으로 리턴
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 수포자 1의 경우
  let oneCount = 0;
  let oneIndex = 0;
  for (let i = 0; i < answers.length; i++) {
    // i가 one 배열 길이의 배수일때 oneIndex가 다시 0부터 시작
    // ex. 0,1,2,3,4이후 5부터 다시 0이 됨
    if (i % one.length === 0) {
      oneIndex = 0;
    }
    if (answers[i] === one[oneIndex]) {
      oneCount++;
    }
    oneIndex++;
  }
  console.log(oneCount);

  // 수포자 2의 경우
  let twoCount = 0;
  let twoIndex = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i % two.length === 0) {
      twoIndex = 0;
    }
    if (answers[i] === two[twoIndex]) {
      twoCount++;
    }
    twoIndex++;
  }
  console.log(twoCount);

  // 수포자 3의 경우
  let threeCount = 0;
  let threeIndex = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i % three.length === 0) {
      threeIndex = 0;
    }
    if (answers[i] === three[threeIndex]) {
      threeCount++;
    }
    threeIndex++;
  }
  console.log(threeCount);

  let grade = [oneCount, twoCount, threeCount];
  let student = [1, 2, 3];
  let numberOne = Math.max(...grade);
  let result = [];
  for (let i = 0; i < grade.length; i++) {
    if (grade[i] === numberOne) {
      result.push(student[i]);
    }
  }

  return result.sort((a, b) => a - b);
}
