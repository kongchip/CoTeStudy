let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const words = input.slice(1);

const filteredWords = words.filter(word => word.length >= M);

const wordCount = {};
filteredWords.forEach(word => {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
});

const sortedWords = filteredWords.sort((a, b) => {
  if (wordCount[a] !== wordCount[b]) {
    return wordCount[b] - wordCount[a]; // 자주 나오는 단어일수록 앞에 배치
  } else if (a.length !== b.length) {
    return b.length - a.length; // 길이가 긴 단어일수록 앞에 배치
  } else {
    return a.localeCompare(b); // 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치
  }
});

const uniqueSortedWords = Array.from(new Set(sortedWords)); // 중복 제거

console.log(uniqueSortedWords.join("\n"));
