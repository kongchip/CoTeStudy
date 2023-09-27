const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim()


// 5666 => 6660 => 6661 => 6662 ...



const N = Number(input)


let count = 0;
let num = 666;


while (true) {
  if (num.toString().includes('666')) {
    count++;
  }


  if (count === N) {
    console.log(num);
    break;
  }

  num++; // 666 ~ N번째 666을 포함한 수를 찾을 때 까지
}