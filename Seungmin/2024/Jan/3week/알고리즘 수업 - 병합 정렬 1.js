const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.split(' ').map(Number))

const solution = () => {
  let [[N, K], arr] = input
  let target, count = 0

  mergeSort(arr)

  if (!target) target = -1

  console.log(target)

  
  function merge(arr1, arr2) {
    let result = []
    let [i, j] = [0, 0]
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i++
      } else {
        result.push(arr2[j])
        j++
      }

      count++

      if (count === K) target = result[result.length - 1]
    }
  
    while (i < arr1.length) {
      result.push(arr1[i])
      i++
      count++

      if (count === K) target = result[result.length - 1]
    }
  
    while (j < arr2.length) {
      result.push(arr2[j])
      j++
      count++

      if (count === K) target = result[result.length - 1]
    }

    return result
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.ceil(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
  }
}

solution()