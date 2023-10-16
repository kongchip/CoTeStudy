const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let setObj = new Set()

  input.shift()

  let arr = input.map(el => el.split(' '))

  arr.forEach(el => {
    const [name, action] = el

    action === 'enter' ? setObj.add(name) : setObj.delete(name)
  })
  
  let answer = [...setObj].sort().reverse()
  
  console.log(answer.join('\n'))
}

// 시간초과
// const solution = () => {
//   let result = ''
//   let list = {
//     'enter': [],
//     'leave': [],
//   }

//   input.shift()

//   let arr = input.map(el => el.split(' '))

//   // list 객체에 추가
//   arr.forEach(el => el.includes('enter') ? list.enter.push(el[0]) : list.leave.push(el[0]))
  
//   let filteredArr = list.enter.filter(el => !list.leave.includes(el))

//   filteredArr.sort((a, b) => b.localeCompare(a)).forEach(el => result += `${el}\n`)

//   console.log(result)
// }

solution()