function solution(s, n) {
  // 알파벳 전체를 가지는 문자열 만들기
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let splited = s.split("");
  let result = [];
  for (let i = 0; i < splited.length; i++) {
    // 소문자일때
    if (alphabet.includes(splited[i])) {
      if (alphabet.indexOf(splited[i]) + n >= 26) {
        result.push(alphabet[alphabet.indexOf(splited[i]) + n - 26]);
      } else result.push(alphabet[alphabet.indexOf(splited[i]) + n]);
    }
    // 대문자일때
    if (Alphabet.includes(splited[i])) {
      if (Alphabet.indexOf(splited[i]) + n >= 26) {
        result.push(Alphabet[Alphabet.indexOf(splited[i]) + n - 26]);
      } else result.push(Alphabet[Alphabet.indexOf(splited[i]) + n]);
    }
    // 공백일때
    if (splited[i] === " ") {
      result.push(" ");
    }
  }
  return result.join("");
}
