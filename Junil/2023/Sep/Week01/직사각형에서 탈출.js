// const input = require("fs").readFileSync("/dev/stdin").toString().split('\n').map((el) => el.split(' ').map(Number))
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ')

const x = Number(input[0])

const y = Number(input[1])

const w = Number(input[2]) // 직사각형 가로

const h = Number(input[3]) // 직사각형 세로

function findMinimumDistance(x, y, w, h) {
    // 최소 거리 계산
    const horizontalDistance = Math.min(x, w - x)
    const verticalDistance = Math.min(y, h - y)
    return Math.min(horizontalDistance, verticalDistance)
}

console.log(findMinimumDistance(x, y, w, h))