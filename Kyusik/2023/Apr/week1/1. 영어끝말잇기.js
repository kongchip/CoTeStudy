function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const curWord = words[i];
    if (words.indexOf(curWord) !== i) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    const lastLetterBeforeWord = words[i - 1].slice(-1);
    const firstLetterCurWord = curWord.charAt(0);
    if (lastLetterBeforeWord !== firstLetterCurWord) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
}
