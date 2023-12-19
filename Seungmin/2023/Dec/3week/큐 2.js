const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' '));

// 런타임 에러(Type Error)
const solution = () => {  
  let result = []

  class ListNode {
    constructor(value = null) {
      this.value = value
      this.next = null
    }
  }

  class LinkedList {
    constructor(head = null) {
      this.head = head
    }

    size() {
      let count = 0
      let node = this.head
      
      while(node) {
        count++
        node = node.next
      }

      return count
    }

    getFirst() {
      return this.head
    }

    getLast() {
      let lastNode = this.head
      
      if(lastNode) {
        while(lastNode.next) {
          lastNode = lastNode.next
        }
      }

      return lastNode
    }
  }

  input.shift()

  let queue = new LinkedList()

  input.forEach(el => {
    let command = el[0]

    switch(command) {
      case 'push' :
        if(queue.size() === 0 ) {
          queue.head = new ListNode(el[1])
        } else {
          queue.getLast().next = new ListNode(el[1])
        }
        break
      case 'pop' :
        if(queue.size() > 0) {
          // result += `${queue.getFirst().value}\n`
          result.push(queue.getFirst().value)

          queue.head = queue.head.next
        } else {
          // result += `-1\n`
          result.push('-1')
        }
        break
      case 'size' :
        // result += `${queue.size()}\n`
        result.push(queue.size().toString())
        break
      case 'empty' :
        // result += `${queue.size() === 0 ? '1' : '0'}\n`
        result.push(queue.size() === 0 ? '1' : '0')
        break
      case 'front' :
        // result += `${queue.getFirst().value ? queue.getFirst().value : '-1'}\n`
        result.push(queue.getFirst().value ? queue.getFirst().value : '-1')
        break
      case 'back' :
        // result += `${queue.getLast().value ? queue.getLast().value : '-1'}\n`
        result.push(queue.getLast().value ? queue.getLast().value : '-1')
        break
    }
  })

  // 시간초과
  // input.forEach(el => {
  //   let queueSize = queue.length
  //   let command = el[0]

  //   switch(command) {
  //     case 'push' :
  //       // queue.push(el[1])

  //       break

  //     case 'pop' :
  //       // result.push(queueSize > 0 ? queue.shift() : '-1')
  //       result += `${queueSize > 0 ? queue.shift() : '-1'}\n`
  //       break

  //     case 'size' :
  //       // result.push(queueSize)
  //       result += `${queueSize}\n`
  //       break
      
  //     case 'empty' :
  //       // result.push(queueSize === 0 ? '1' : '0')
  //       result += `${queueSize === 0 ? '1' : '0'}\n`
  //       break

  //     case 'front' :
  //       // result.push(queueSize > 0 ? queue[0] : '-1')
  //       result += `${queueSize > 0 ? queue[0] : '-1'}\n`
  //       break
      
  //     case 'back' :
  //       // result.push(queueSize > 0 ? queue[queueSize - 1] : '-1')
  //       result += `${queueSize > 0 ? queue[queueSize - 1] : '-1'}\n`
  //       break
  //   }
  // })

  console.log(result.join('\n'))
}

solution()