const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const solution = () => {
  let result = []
  let count = 0
  
  input.shift()
  
  input.forEach(el => {
    count = 0

    result.push(`${isPalindrome(el)} ${count}`)
  })
  
  console.log(result.join('\n'))
  
  
  function recursion(str, l, r){
    count++
    
    if(l >= r) return 1
    else if(str[l] !== str[r]) return 0
    else return recursion(str, l+1, r-1)
  }
  
  function isPalindrome(str){
    return recursion(str, 0, str.length - 1);
  }
}

solution()