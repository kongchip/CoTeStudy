function solution(n, lost, reserve) {
  // 전체 학생 배열
  const studentArr = new Array(n).fill(1);

  // 여벌 체육복 있는 학생들 +1
  for (let i = 0; i < reserve.length; i++) {
    studentArr[reserve[i] - 1]++;
  }

  // 체육복 잃어버린 학생들 -1
  for (let i = 0; i < lost.length; i++) {
    studentArr[lost[i] - 1]--;
  }

  // i를 기준으로 i번째 학생이 여벌 체육복이 있고, 이전학생이 체육복이 없으면 빌려주기
  // i번째 학생이 여벌 체육복이 있고, 다음 학생이 체육복이 없으면 빌려주기
  for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i] === 2 && studentArr[i - 1] === 0) {
      studentArr[i]--;
      studentArr[i - 1]++;
    } else if (studentArr[i] === 2 && studentArr[i + 1] === 0) {
      studentArr[i]--;
      studentArr[i + 1]++;
    }
  }

  // 전체학생 배열에서 0이 아닌 애들만 뽑고 길이 리턴
  return studentArr.filter((el) => el).length;
}
