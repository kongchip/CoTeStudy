const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
  }
  prev = null;
  next = null;
}

class Deque {
  left = null;
  right = null;
  size = 0;
  leftInsert(val) {
    const curNode = new Node(val);
    this.size += 1;
    if (!this.left || !this.right) {
      this.left = curNode;
      this.right = curNode;
    } else {
      curNode.next = this.left;
      this.left.prev = curNode;
      this.left = curNode;
    }
  }
  rightInsert(val) {
    const curNode = new Node(val);
    this.size += 1;
    if (!this.left || !this.right) {
      this.left = curNode;
      this.right = curNode;
    } else {
      curNode.prev = this.right;
      this.right.next = curNode;
      this.right = curNode;
    }
  }
  leftExtract() {
    if (!this.left) return;
    const popedVal = this.left.value;
    this.size -= 1;
    if (this.left.next) {
      this.left = this.left.next;
      this.left.prev = null;
    } else {
      this.left = null;
      this.right = null;
    }
    return popedVal;
  }
}

const deque = new Deque();
const C = input.pop().split(' '); // ["2", "4", "7"]
const CLen = input.pop();
const B = input.pop().split(' '); // ["1", "2", "3", "4"]
const A = input.pop().split(' '); // ["0", "1", "1", "0"]
const ABLen = Number(input.pop());
const result = [];
// 타입이 '큐' 인 요소 중 뒤에 있는 요소가 가장 먼저 출력 됨(큐의 요소들이 밀리면서 가장 우측에서 출력)
for (let i = 0; i < ABLen; i++) {
  if (A[i] === '0') deque.leftInsert(B[i]);
}
// 입력이 그 다음 입력된 순으로 출력됨(타입이 '큐' 인 요소의 자리에 순서대로 재입력되기 때문)
for (let i = 0; i < CLen; i++) {
  deque.rightInsert(C[i]);
  result.push(deque.leftExtract());
}

console.log(result.join(' '));
