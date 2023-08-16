const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

// 규칙 1.
// 1그룹 기준으로 분수를 1개를 가지고있고
// 그룹이 증가(2그룹,3그룹) 갈때마다 가지고 있을수 있는 분수의 갯수가 1씩 증가
// 즉, 내가 찾고싶은 수(입력N을 가질수 있는 그룹을 찾을수 있다

// 규칙 2.
// 분모 분자의 기준은 그룹의 번호(groupX)
// 그룹이 짝수면 분자는 1부터 오름차순 | 분모는 groupX부터 내림차순
// 그룹이 홀수면 분자는 groupX부터 내림차순 | 분모는 1부터 오름차순

// 구해야 하는 값
// 1. 그룹 구하기 -> 몇번째 그룹인지
// 2. 그룹에서 위치 구하기 -> X + groupX - 1
// 3. 값 구하기 -> 그룹이 홀수인지 짝수인지 구분후, 2번의 위치를 이용해 값을 구한다

// 그룹구하기 위해 필요한 변수
let X = Number(input);
let groupX = 0;

// 1.
while (X > 0) {
  groupX++;
  X = X - groupX;
}

// 2.
let 오름차순 = [];
let 내림차순 = [];
for (let i = 0; i < groupX; i++) {
  오름차순.push(i + 1);
  내림차순.push(groupX - i);
}

// 3
if (groupX % 2 !== 0) {
  console.log(`${내림차순[X + groupX - 1]}/${오름차순[X + groupX - 1]}`);
} else {
  console.log(`${오름차순[X + groupX - 1]}/${내림차순[X + groupX - 1]}`);
}
