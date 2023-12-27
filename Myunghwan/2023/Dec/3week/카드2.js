const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

// let queue = [];
// for (let i = 1; i <= N; i++) {
//   queue.push(i);
// }

// while (true) {
//   if (queue.length === 1) {
//     break;
//   } else {
//     queue.shift();
//     queue.push(queue.shift());
//   }
// }

// console.log(queue[0]);
// ------------------시간초과---------------------------------

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   add(value) {
//     const node = new Node(value);

//     if (this.head) {
//       // 기존 노드가 있을 때
//       this.tail.next = node;
//       node.prev = this.tail;
//     } else {
//       // 기존 노드가 없을때
//       this.head = node;
//     }
//     this.tail = node;
//     this.length++;
//     return node;
//   }

//   remove() {
//     // 맨 앞 노드 제거
//     this.head = this.head.next;
//     this.head.prev = null;
//     this.length--;
//   }

//   getHead() {
//     // HEAD의 값 가져오기
//     return this.head.value;
//   }
// }

// function solution(N) {
//   const cards = new LinkedList();
//   for (let i = 1; i <= N; i++) {
//     cards.add(i);
//   }

//   while (cards.length > 1) {
//     // 1. 맨 위에 있는 수 제거
//     cards.remove();
//     // 2. 그다음 위에 있는 수를 맨밑으로 이동
//     cards.add(cards.getHead());
//     cards.remove();
//   }
//   return cards.getHead();
// }

// const card = solution(N);
// console.log(card);

// ---------- 직접 해보기 ----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.length++;
    return node;
  }
  remove() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getHead() {
    return this.head.value;
  }
}

function solution(num) {
  const cards = new LinkedList();

  for (let i = 1; i <= num; i++) {
    cards.push(i);
  }

  while (cards.length > 1) {
    cards.remove();
    cards.push(cards.getHead());
    cards.remove();
  }
  return cards.getHead();
}

const cards = solution(N);
console.log(cards);
