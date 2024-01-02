// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let N = +input[0];
// input.shift();
// let result = [];

// for (let el of input) {
//   let str = el.split(' ');
//   let command = str[0];

//   switch (command) {
//     case 'push':
//       result.push(str.length > 1 ? parseInt(str[1]) : null);
//       break;

//     case 'pop':
//       if (result.length === 0) {
//         console.log(-1);
//       } else {
//         console.log(result.shift());
//       }
//       break;

//     case 'size':
//       console.log(result.length);
//       break;

//     case 'empty':
//       console.log(result.length === 0 ? 1 : 0);
//       break;

//     case 'front':
//       console.log(result.length === 0 ? -1 : result[0]);
//       break;

//     case 'back':
//       console.log(result.length === 0 ? -1 : result[result.length - 1]);
//       break;
//   }
// }
// -----------시간초과-----------
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...command] = input;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);

    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
      this.head.next = this.tail;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.size >= 1) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size--;
      return item;
    } else {
      return -1;
    }
  }

  size() {
    return this.size;
  }

  empty() {
    return this.size >= 1 ? 0 : 1;
  }

  front() {
    return this.size >= 1 ? this.head : -1;
  }

  back() {
    return this.size >= 1 ? this.tail : -1;
  }
}

function solution(N, command) {
  const queue = new Queue();
  let result = '';

  for (let i = 0; i < N; i++) {
    const command = command[i].split(' ')[0];

    switch (command) {
      case 'push':
        const commandItem = command[i].split(' ')[1];
        queue.push(commandItem);
        break;

      case 'pop':
        answer += queue.pop() + ' ';
        break;

      case 'size':
        answer += queue.size() + ' ';
        break;

      case 'empty':
        answer += queue.empty() + ' ';
        break;

      case 'front':
        answer += queue.front() + ' ';
        break;

      case 'back':
        answer += queue.back() + ' ';
        break;
    }
  }
  return answer;
}
console.log(solution(N, command));
