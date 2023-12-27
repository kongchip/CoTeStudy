let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const balloons = input[1].split(" ").map(Number);
const answer = [];

// 풍선의 값 = 해당 인덱스 풍선이 터진 뒤 다음 인덱스
let curr = 0;

for (let i = 0; i < N; i++) {
  let nextIdx = 0;

  if (i === 0) {
    curr = balloons.shift();
    answer.push(1);
  } else {
    // 다음 터지는 풍선
    let [num] = balloons.splice(curr - 1, 1);

    if (num < 0) {
      nextIdx = balloons.length + num - 1;
      console.log(balloons[nextIdx]);
    } else {
      console.log(balloons[num]);
    }
  }
}

// 진짜 모르겠음.....
