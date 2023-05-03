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
