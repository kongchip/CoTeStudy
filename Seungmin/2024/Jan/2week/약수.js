const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const solution = () => {
  let result
  /** input에서 주어진 약수들 */  
  let divisor  = input[1].split(' ').map(Number)
  let N = Math.min(...divisor)

  // 약수 중 가장 작은 값 부터 시작하고 +1씩 해주면서 반복하여 정답 N 찾기
  while(true) {
    let iterator

    for(let i = 0; i < divisor.length; i++) {
      // 약수들 중에서 N과 같거나,
      // N을 약수들로 나눴을 때 나누어 떨어지지 않으면 N++되고 while문 다시
      if(N === divisor[i] || N % divisor[i] !== 0) break

      iterator = i
    }
    
    // 위의 for문이 끝까지 다 실행되어야 아래 조건이 true
    if(iterator === divisor.length - 1) {
      // push + 중복제거 효과 위해 Set 사용
      let set = new Set()

      // 아래 약수 개수를 구하는 for문이 필요한 이유는, 입력값의 약수들'만' 갖는 N이어야 하기 때문
      // 예를 들어, [3, 9] 가 주어진 경우 27이 정답.
      // 하지만 아래 로직이 없다면 18이 출력됨.
      for(let i = 2; i <= Math.sqrt(N); i++) {
        if(N % i === 0) {
          set.add(i)
          set.add(N / i)
        }
      }
      
      // N의 약수 개수와 입력값의 약수 개수를 비교하여 같은 경우에만 while문 종료
      if(divisor.length === set.size) {
        result = N
        break
      }
    }

    N++
  }

  console.log(result)
}

solution()