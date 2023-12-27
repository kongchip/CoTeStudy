const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => +el);

// 7 = N, 3 = K
// 1 ~ 7
// 1, 4,
// 3, 6 ,2, 7,5,1,4
const [N, K] = input;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.length;
  }
  dequeue() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return temp.value;
  }
}

let answer = '<';
let queue = new LinkedList();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.length > 1) {
  for (let i = 1; i < K; i++) {
    queue.enqueue(queue.dequeue());
  }
  answer += queue.dequeue() + ', ';
}

answer += queue.dequeue() + '>';
console.log(answer);
