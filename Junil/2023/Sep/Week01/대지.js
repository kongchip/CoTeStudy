// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim(' ').split('\n').map((el) => el.split(' ').map(Number))

// 가장 큰 x,y - 가장 작은 x,y 의 곱??
let dots = input.shift()

// 가장 작은 x, y 값을 찾기 위해 초기값을 배열의 첫 번째 원소로 설정합니다.
let minX = input[0][0]
let minY = input[0][1]

// 가장 큰 x, y 값을 찾기 위해 초기값을 배열의 첫 번째 원소로 설정합니다.
let maxX = input[0][0]
let maxY = input[0][1]

// 배열을 순회하면서 최소값과 최대값을 찾습니다.
for (let i = 1; i < input.length; i++) {
    const x = input[i][0]
    const y = input[i][1]

    if (x < minX) {
        minX = x
    }
    if (y < minY) {
        minY = y
    }
    if (x > maxX) {
        maxX = x
    }
    if (y > maxY) {
        maxY = y
    }
}

console.log((maxX - minX) * (maxY - minY))