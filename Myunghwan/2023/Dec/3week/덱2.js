const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class Node {
  next = undefined;
  prev = undefined;
  constructor(val) {
    this.value = val;
  }
}

class Deque {
  head = undefined;
  tail = undefined;
  size = 0;

  insert(val, type) {
    const curNode = new Node(val);
    if (!this.size) {
      if (!this.head) this.head = curNode;
      if (!this.tail) this.tail = curNode;
    } else {
      if (type === 'front') {
        this.head.prev = curNode;
        curNode.next = this.head;
        this.head = curNode;
      } else if (type === 'back') {
        this.tail.next = curNode;
        curNode.prev = this.tail;
        this.tail = curNode;
      }
    }

    this.size += 1;
  }

  frontExtract() {
    if (!this.head) return -1;
    const curVal = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = undefined;
    else {
      this.head.prev = undefined;
    }
    this.size -= 1;
    return curVal;
  }

  backExtract() {
    if (!this.tail) return -1;
    const curVal = this.tail.value;
    this.tail = this.tail.prev;
    if (!this.tail) this.head = undefined;
    else {
      this.tail.next = undefined;
    }
    this.size -= 1;
    return curVal;
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return !this.size ? 1 : 0;
  }

  printFront() {
    if (!this.head) return -1;
    return this.head.value;
  }

  printBack() {
    if (!this.tail) return -1;
    return this.tail.value;
  }
}

const deque = new Deque();
const result = [];
input.shift();
input.forEach((command) => {
  const [type, val] = command.split(' ');
  switch (type) {
    case '1':
      deque.insert(Number(val), 'front');
      break;
    case '2':
      deque.insert(Number(val), 'back');
      break;
    case '3':
      result.push(deque.frontExtract());
      break;
    case '4':
      result.push(deque.backExtract());
      break;
    case '5':
      result.push(deque.length());
      break;
    case '6':
      result.push(deque.isEmpty());
      break;
    case '7':
      result.push(deque.printFront());
      break;
    case '8':
      result.push(deque.printBack());
      break;
    default:
      break;
  }
});

console.log(result.join('\n'));
