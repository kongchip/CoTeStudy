function solution(n, arr1, arr2) {
  // n = 변의 길이 = 이진수의 길이 = arr1, arr2의 길이
  // arr1 = 지도1 = 각 요소를 이진수로 바꾸면 ""과 "#"를 알수 있음
  // arr2 = 지도2 = 위와 동일
  // 이진수화 된 arr1과 arr2를 합친다
  // 0은 "", 1 또는 2는 "#"로 변환 후 리턴

  // 지도1 2진수로 변환
  let map1 = [];
  for (let i = 0; i < n; i++) {
    map1.push(arr1[i].toString(2));
    map1 = map1.map(Number);
  }

  // 지도2 2진수로 변환
  let map2 = [];
  for (let i = 0; i < n; i++) {
    map2.push(arr2[i].toString(2));
    map2 = map2.map(Number);
  }

  // sumArr에 지도1, 지도2 더한 수를 문자열로 변환 후, 자리수가 부족한 요소 앞에 0 추가하고 넣기
  let sumArr = [];
  for (let i = 0; i < map1.length; i++) {
    sumArr.push(map1[i] + map2[i]);
    sumArr = sumArr.map(String);
    for (let j = 0; j < sumArr.length; j++) {
      if (sumArr[j].length < n) {
        sumArr[j] = "0" + sumArr[j];
      }
    }
  }

  // finalArr에 2를 1로 변환하고 넣기
  let finalArr = [];
  for (let i = 0; i < sumArr.length; i++) {
    let finalNum = sumArr[i].replace(/2/gi, "1");
    finalArr.push(finalNum);
  }

  // arr에 1을 #으로 변환해서 넣기
  let oneToHash = [];
  for (let i = 0; i < finalArr.length; i++) {
    let toHash = finalArr[i].replace(/1/g, "#");
    oneToHash.push(toHash);
  }

  // finalResult에 0을 공백으로 넣기
  let zeroToBlank = [];
  for (let i = 0; i < oneToHash.length; i++) {
    let toBlank = oneToHash[i].replace(/0/g, " ");
    zeroToBlank.push(toBlank);
  }
  return zeroToBlank;
}
