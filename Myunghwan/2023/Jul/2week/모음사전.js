function solution(word) {
  // 자릿수 별로 값이 늘어나는 규칙
  //  [?, ?, ?, 1*5+1, 1];
  //  [?, ?, 6*5+1, 6, 1];
  //  [?, 31*5+1, 31, 6, 1];
  //  [156*5+1, 156, 31, 6, 1];
  //  [781, 156, 31, 6, 1];

  let result = word.length;
  let gather = 'AEIOU';
  let rool = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    const idx = gather.indexOf(word[i]);
    result += idx * rool[i];
  }
  return result;
}
