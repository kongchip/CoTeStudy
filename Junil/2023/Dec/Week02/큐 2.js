let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
// const queue = [];
// const answer = [];

// for (let i = 0; i < N; i++) {
//   if (input[i].startsWith("push")) {
//     queue.push(input[i].split(" ")[1]);
//   }

//   if (input[i] === "pop") {
//     queue.length === 0 ? answer.push(-1) : answer.push(queue.shift());
//   }

//   if (input[i] === "size") {
//     answer.push(queue.length);
//   }

//   if (input[i] === "empty") {
//     queue.length === 0 ? answer.push(1) : answer.push(0);
//   }

//   if (input[i] === "front") {
//     queue.length === 0 ? answer.push(-1) : answer.push(queue[0]);
//   }

//   if (input[i] === "back") {
//     queue.length === 0 ? answer.push(-1) : answer.push(queue[queue.length - 1]);
//   }
// }

// console.log(answer.join("\n"));

class Queue {
  constructor() {
    this.queue = [];
    this.frontIndex = 0;
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    const front = this.queue[this.frontIndex];
    this.frontIndex++;
    return front;
  }

  size() {
    return this.queue.length - this.frontIndex;
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    return this.isEmpty() ? -1 : this.queue[this.frontIndex];
  }

  back() {
    return this.isEmpty() ? -1 : this.queue[this.queue.length - 1];
  }
}

const queue = new Queue();
const answer = [];

for (let i = 0; i < N; i++) {
  if (input[i].startsWith("push")) {
    queue.push(input[i].split(" ")[1]);
  }
  if (input[i] === "pop") {
    answer.push(queue.pop());
  }
  if (input[i] === "size") {
    answer.push(queue.size());
  }
  if (input[i] === "empty") {
    answer.push(queue.isEmpty() ? 1 : 0);
  }
  if (input[i] === "front") {
    answer.push(queue.front());
  }
  if (input[i] === "back") {
    answer.push(queue.back());
  }
}

console.log(answer.join("\n"));
