function solution(s) {
  // 각 문자를 공백 기준으로 나눔
  // 짝수번째 인덱스는 대문자. 홀수번째 인덱스는 소문자로 변환
  // 다시 문자를 합치고 리턴

  let word = s.split(" "); // 문자열 s를 공백 기준으로 나눔 ['try', 'hello','world']
  let ans = "";
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    let char = word[i].split(""); // word[i]를 다시 각 문자로 나눔 ['t','r','y']...
    arr = char.map((el, i) =>
      i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
    );
    ans += arr.join("") + " "; // 단어만들고 사이에 공백 추가
  }
  return ans.slice(0, -1); // 마지막 공백 제거
}
