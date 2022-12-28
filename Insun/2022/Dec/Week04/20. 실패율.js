function solution(N, stages) {
  let failRate = 0;
  let stage = 1;
  let sortStages = stages.sort((a, b) => a - b);
  let result = {};
  let answer = [];

  for (let i = 1; i <= N; i++) {
    // stage가 N보다 크게 되면 break
    if (stage === N + 1) break;
    // sortStages가 []이 되면 실패율도 0
    if (sortStages.length === 0) {
      failRate = 0;
    } else {
      // stage와 같은 요소를 arr에 넣어서 실패율을 구함
      let arr = sortStages.filter((el) => el === stage);
      failRate = arr.length / sortStages.length;
    }
    // stage와 겹치는 요소들을 빼고 다시 sortStages 배열 만들어줌. stage는 1 올리고 i는 0으로 초기화
    sortStages = sortStages.filter((el) => el !== stage);
    stage++;
    i = 0;

    // answer배열에 객체로 sorting
    result[stage - 1] = failRate;
    answer = Object.entries(result).sort((a, b) => {
      // 실패율이 같으면 stage로 정렬. 그게 아니면 실패율로 정렬
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });
  }

  // answer에서 stage만 뽑아 sorted 배열에 push
  let sorted = [];
  for (let x of answer) {
    sorted.push(+x[0]);
  }
  return sorted;
}
