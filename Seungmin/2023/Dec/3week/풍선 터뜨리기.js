const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[1].split(' ').map(Number);

class ListNode {
  constructor(item, index) {
    this.item = item
    this.next = null
    this.prev = null
    this.index = index
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  unshift(item, index = null) {
    let node = new ListNode(item, index)

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

  push(item, index = null) {
    let node = new ListNode(item, index)

    if(!this.head) {
      node.index = 1
      this.head = node
      this.tail = node
    } else {
      node.index = node.index || this.tail.index  + 1
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
      let item = this.head

      this.head.next.prev = null
      this.head = this.head.next
      this.size--

      return item
    } else if (this.size === 2) {
      let item = this.head

      this.head = this.head.next
      this.tail.prev = null
      this.size--

      return item
    } else if (this.size === 1) {
      let item = this.head

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
      let item = this.tail

      this.tail.prev.next = null
      this.tail = this.tail.prev
      this.size--

      return item
    } else if (this.size === 2) {
      let item = this.tail

      this.tail = this.tail.prev
      this.head.next = null
      this.size--

      return item
    } else if (this.size === 1) {
      let item = this.tail

      this.head = null
      this.tail = null
      this.size--

      return item
    } else {
      return -1
    }
  }
}

// 양수면 풍선숫자-1만큼 shift해서 push -> 첫번째거 인덱스 shift
// 음수면 풍선숫자+1만큼 pop해서 unshift -> 마지막거 인덱스 pop
const solution = () => {  
  let result = '1' // [1]
  let deque = new LinkedList()

  input.forEach(el => deque.push(el))

  let num = deque.shift().item

  while(deque.getSize() > 0) {        
    let popItem = null
    
    if(num > 0) {
      for(let i = 1; i <= num - 1; i++) {
        let {item, index} = deque.shift()

        deque.push(item, index)
      }

      popItem = deque.shift()
      num = popItem.item

      // result.push(popItem.index)
      result += ` ${popItem.index}`
    } else {
      for(let i = 1; i <= -num - 1; i++) {
        let {item, index} = deque.pop()

        deque.unshift(item, index)
      }

      popItem = deque.pop()
      num = popItem.item

      // result.push(popItem.index)
      result += ` ${popItem.index}`
    }
  }

  // console.log(result.join(' '))
  console.log(result.trim())
}

solution()