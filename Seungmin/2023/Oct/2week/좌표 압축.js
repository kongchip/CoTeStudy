const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// solution1 -> 시간초과
// const solution = () => {
//   let result = ''

//   input.shift()

//   // input 배열화
//   let arr = input[0].split(' ').map(Number)

//   // 중복 제거 및 오름차순 정렬
//   let sortedArr = [...new Set(arr)].sort((a, b) => a - b)

//   // 정렬된 배열에서 일치하는 요소의 index 찾기
//   arr.forEach(el => result += ` ${sortedArr.indexOf(el)}`)

//   console.log(result.trim())
// }

// solution2
const solution = () => {
  let result = ''
  let mapObj = new Map()

  input.shift()

  // input 배열화
  let arr = input[0].split(' ').map(Number)

  // **중복제거** 및 오름차순 정렬
  let sortedArr = [...new Set(arr)].sort((a, b) => a - b)

  // Map객체에 추가 (key => 각 요소, value => 각 요소의 인덱스)
  sortedArr.forEach((el, idx) => mapObj.set(el, idx))

  // Map객체에서 각 요소를 key로 갖는 속성의 value 조회
  arr.forEach(el => result += ` ${mapObj.get(el)}`)

  console.log(result.trim())
}

solution()