// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ')

const N = input[0]
const B = input[1]


function convertToBaseN(decimalNumber, base) {
    const digitMap = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';
  
    while (decimalNumber > 0) {
      const remainder = decimalNumber % base;
      result = digitMap[remainder] + result;
      decimalNumber = Math.floor(decimalNumber / base);
    }
  
    return result;
}
  

  console.log(convertToBaseN(N,B))