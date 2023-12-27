const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' '));

class ListNode {
  constructor(item) {
    this.item = item
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  unshift(item) {
    let node = new ListNode(item)

    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.size++
  }

  push(item) {
    let node = new ListNode(item)

    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }

    this.size++
  }

  getSize() {
    return this.size
  }

  shift() {
    if(this.size > 2) {
      let item = this.head.item

      this.head.next.prev = null
      this.head = this.head.next
      this.size--

      return item
    } else if (this.size === 2) {
      let item = this.head.item

      this.head = this.head.next
      this.tail.prev = null
      this.size--

      return item
    } else if (this.size === 1) {
      let item = this.head.item

      this.head = null
      this.tail = null
      this.size--

      return item
    } else {
      return -1
    }
  }

  pop() {
    if(this.size > 2) {
      let item = this.tail.item

      this.tail.prev.next = null
      this.tail = this.tail.prev
      this.size--

      return item
    } else if (this.size === 2) {
      let item = this.tail.item

      this.tail = this.tail.prev
      this.head.next = null
      this.size--

      return item
    } else if (this.size === 1) {
      let item = this.tail.item

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
  let deque = new LinkedList()

  input.shift()

  input.forEach(el => {
    let command = el[0]

    switch(command) {
      case '1' :
        deque.unshift(el[1])
        break
      case '2' :
        deque.push(el[1])
        break
      case '3' :
        result.push(deque.shift())
        break
      case '4' :
        result.push(deque.pop())
        break
      case '5' :
        result.push(deque.getSize())
        break
      case '6' :
        result.push(deque.empty())
        break
      case '7' :
        result.push(deque.getFirst())
        break
      case '8' :
        result.push(deque.getLast())
        break
    }
  })

  console.log(result.join('\n'))
}

solution()