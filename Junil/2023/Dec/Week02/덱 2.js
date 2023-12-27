let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(number =>
    number.includes(" ") ? number.split(" ").map(Number) : [Number(number)]
  );

const N = input.shift();

const answer = [];

class Deck {
  constructor() {
    this.cards = [];
  }

  unshift(x) {
    // 배열의 맨 앞에 원소를 추가
    for (let i = this.cards.length; i > 0; i--) {
      this.cards[i] = this.cards[i - 1];
    }
    this.cards[0] = x;
  }

  push(x) {
    // 배열의 맨 뒤에 원소를 추가
    this.cards[this.cards.length] = x;
  }

  popFront() {
    // 배열의 맨 앞에서 원소를 제거하고 반환
    if (this.cards.length === 0) {
      return -1;
    }

    const front = this.cards[0];

    for (let i = 0; i < this.cards.length - 1; i++) {
      this.cards[i] = this.cards[i + 1];
    }

    this.cards.length -= 1;

    return front;
  }

  popBack() {
    // 배열의 맨 뒤에서 원소를 제거하고 반환
    if (this.cards.length === 0) {
      return -1;
    }

    const back = this.cards[this.cards.length - 1];
    this.cards.length -= 1;
    return back;
  }

  size() {
    // 배열의 길이를 반환
    return this.cards.length;
  }

  isEmpty() {
    // 배열이 비어있는지 여부를 반환
    return this.cards.length === 0;
  }

  front() {
    // 배열의 맨 앞에 있는 원소를 반환
    return this.isEmpty() ? -1 : this.cards[0];
  }

  back() {
    // 배열의 맨 뒤에 있는 원소를 반환
    return this.isEmpty() ? -1 : this.cards[this.cards.length - 1];
  }
}

const deck = new Deck();

for (let i = 0; i < N; i++) {
  const command = input[i][0];

  if (command === 1) {
    deck.unshift(input[i][1]);
  }

  if (command === 2) {
    deck.push(input[i][1]);
  }

  if (command === 3) {
    answer.push(deck.popFront());
  }

  if (command === 4) {
    answer.push(deck.popBack());
  }

  if (command === 5) {
    answer.push(deck.size());
  }

  if (command === 6) {
    answer.push(deck.isEmpty() ? 1 : 0);
  }

  if (command === 7) {
    answer.push(deck.front());
  }

  if (command === 8) {
    answer.push(deck.back());
  }
}
console.log(answer.join("\n"));
