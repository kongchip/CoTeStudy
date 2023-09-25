function solution(elements) {
  // 중복되는 값을 지워야하므로 set 사용
  const resultSet = new Set();

  for (let i = 0; i < elements.length; i++) {
    const newArr = elements.concat(elements.slice(0, i));

    for (let j = 0; j < elements.length; j++) {
      resultSet.add(newArr.slice(j, j + i).reduce((acc, cur) => acc + cur, 0));
    }
  }

  return resultSet.size;
}

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (27.21ms, 39.2MB)
// 테스트 3 〉	통과 (37.78ms, 41.8MB)
// 테스트 4 〉	통과 (95.58ms, 43.8MB)
// 테스트 5 〉	통과 (131.08ms, 49.9MB)
// 테스트 6 〉	통과 (238.51ms, 49.7MB)
// 테스트 7 〉	통과 (315.53ms, 59MB)
// 테스트 8 〉	통과 (457.53ms, 62.2MB)
// 테스트 9 〉	통과 (751.89ms, 62.3MB)
// 테스트 10 〉	통과 (970.24ms, 62.4MB)
// 테스트 11 〉	통과 (230.89ms, 49.7MB)
// 테스트 12 〉	통과 (212.15ms, 49.8MB)
// 테스트 13 〉	통과 (260.41ms, 49.8MB)
// 테스트 14 〉	통과 (400.54ms, 59MB)
// 테스트 15 〉	통과 (390.10ms, 59.1MB)
// 테스트 16 〉	통과 (545.46ms, 62.3MB)
// 테스트 17 〉	통과 (724.73ms, 62.3MB)
// 테스트 18 〉	통과 (669.23ms, 62.2MB)
// 테스트 19 〉	통과 (978.41ms, 62.3MB)
// 테스트 20 〉	통과 (1251.76ms, 62.3MB)

function solution(elements) {
  // 중복되는 값을 지워야하므로 set 사용
  const resultSet = new Set();

  for (let i = 0; i < elements.length; i++) {
    const newArr = elements.concat(elements.slice(0, i));
    // console.log(i ,newArr)

    //sliding window 패턴 사용해서 개별 길이마다의 연속부분수열의 합 구하기
    //i = 1, [7,9,1,1,4,7] length = 6, index는 4번까지.
    let sum = 0;
    for (let j = 0; j < i + 1; j++) {
      sum += newArr[j];
    }
    // console.log('sum', sum)
    resultSet.add(sum);
    for (let j = i + 1; j < newArr.length; j++) {
      sum = sum - newArr[j - (i + 1)] + newArr[j];
      // console.log(sum)
      resultSet.add(sum);
    }
  }

  return resultSet.size;
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (10.41ms, 39.3MB)
// 테스트 3 〉	통과 (15.88ms, 42.3MB)
// 테스트 4 〉	통과 (14.88ms, 42.9MB)
// 테스트 5 〉	통과 (33.81ms, 48.7MB)
// 테스트 6 〉	통과 (34.09ms, 50.2MB)
// 테스트 7 〉	통과 (61.71ms, 55.8MB)
// 테스트 8 〉	통과 (87.58ms, 58.1MB)
// 테스트 9 〉	통과 (90.56ms, 60.7MB)
// 테스트 10 〉	통과 (73.24ms, 62MB)
// 테스트 11 〉	통과 (25.41ms, 49.4MB)
// 테스트 12 〉	통과 (34.09ms, 50.2MB)
// 테스트 13 〉	통과 (34.01ms, 50MB)
// 테스트 14 〉	통과 (45.18ms, 55.7MB)
// 테스트 15 〉	통과 (51.98ms, 56.7MB)
// 테스트 16 〉	통과 (58.00ms, 58MB)
// 테스트 17 〉	통과 (55.33ms, 59.5MB)
// 테스트 18 〉	통과 (59.69ms, 60.6MB)
// 테스트 19 〉	통과 (454.16ms, 60.8MB)
// 테스트 20 〉	통과 (77.77ms, 61.9MB)
