const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split('\n')
//   .map((el) => el.split(' ').map((el) => +el));
// input.shift();
// input = input.flat();

// // input = ['2', '4', '-10', '4', '-9' ]
// // input의 element를 크기순으로 바꿔주되, index로 바꿔준다? 또한 같은수는 같은 인덱스로
// // el) input = [-10, -9, 2, 4, 4] -> -10 : 0, -9 : 1, 2: 2, 4:3
// // el)         [2, 3, 0, 3, 1]
// let aArr = Array(...input);
// // 중복을 제거하고, 배열을 정렬한 후, Object형태로 바꾸면서, index를 value값으로 넣는다
// let bArr = aArr.filter((v, i) => aArr.indexOf(v) === i);
// bArr.sort((a, b) => a - b);
// let obj = {};
// bArr.forEach((element, idx) => {
//   obj[element] = idx;
// });
// // a배열에서 각인덱스의 값을 obj객체의 값으로 변환
// let result = [];
// for (let i = 0; i < aArr.length; i++) {
//   result.push(obj[aArr[i]]);
// }
// console.log(result.join(' '));

// -------- 시간 초과 --------

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map((el) => +el);

// let aArr = Array(...new Set(input)).sort((a, b) => a - b);
let aArr = [...new Set(input)].sort((a, b) => a - b);
let obj = {};
let result = [];

aArr.forEach((el, idx) => {
  obj[el] = idx;
});

for (let i = 0; i < input.length; i++) {
  result.push(obj[input[i]]);
}
console.log(result.join(' '));

// -------- 시간 초과 --------

// let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let N = Number(input.shift());
// let arr = input[0].split(' ').map((x) => +x);

// let set = new Set(arr);
// let uniq = [...set].sort((a, b) => a - b);

// let dic = {};
// uniq.forEach((e, index) => {
//   dic[e] = index;
// });

// let answer = '';
// for (let i = 0; i < arr.length; i++) {
//   answer += dic[arr[i]] + ' ';
// }

// console.log(answer);
