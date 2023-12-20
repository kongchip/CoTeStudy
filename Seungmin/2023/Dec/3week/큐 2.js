const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' '));

class ListNode {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(item) {
    let node = new ListNode(item)

    if(!this.head) {
      this.head = node
      this.head.next = this.tail
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.size++
  }

  getSize() {
    return this.size
  }

  pop() {
    if(this.size > 2) {
      let item = this.head.item
      let newHead = this.head.next

      this.head = newHead
      this.size--

      return item
    } else if (this.size === 2) {
      let item = this.head.item
      let newHead = this.head.next

      this.head = newHead
      this.tail = newHead
      this.size--

      return item
    } else if (this.size === 1) {
      let item = this.head.item
      let newHead = this.head.next

      this.head = null
      this.tail = null
      this.size--

      return item
    } else {
      return -1
    }
  }

  empty() {
    return this.size ? 0 : 1
  }

  getFirst() {
    return this.head ? this.head.item : -1
  }

  getLast() {
    return this.tail ? this.tail.item : -1
  }
}

const solution = () => {  
  let result = []
  let queue = new LinkedList()

  input.shift()

  input.forEach(el => {
    let command = el[0]

    switch(command) {
      case 'push' :
        queue.push(el[1])
        break
      case 'pop' :
        result.push(queue.pop())
        break
      case 'size' :
        result.push(queue.getSize())
        break
      case 'empty' :
        result.push(queue.empty())
        break
      case 'front' :
        result.push(queue.getFirst())
        break
      case 'back' :
        result.push(queue.getLast())
        break
    }
  })

  console.log(result.join('\n'))
}

solution()