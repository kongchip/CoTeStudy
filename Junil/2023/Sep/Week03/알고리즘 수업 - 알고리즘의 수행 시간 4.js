const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt").toString().trim();


let num = 0;
for (let i = 1; i <= input - 1; i++) {
    num += i;
}
console.log(num);
console.log(2);