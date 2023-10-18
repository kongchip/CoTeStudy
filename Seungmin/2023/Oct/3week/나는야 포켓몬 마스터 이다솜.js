const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let result = []
  let pokemonMap = new Map()
  let numArr = input.shift().split(' ').map(Number)

  // key가 이름인 경우는 소문자or대문자로 변환 필요
  // key가 번호인 경우는 value가 나중에 그대로 나와야하므로 변환하면 안됨 
  input.splice(0, numArr[0]).forEach((el, idx) => {
    // key -> 포켓몬 이름
    pokemonMap.set(el.toLowerCase(), idx + 1)
    // key -> 포켓몬 번호 / key 타입이 숫자로 저장되므로 문자로 변환 필요
    pokemonMap.set(String(idx + 1), el)
  })

  input.forEach(el => result.push(pokemonMap.get(el.toLowerCase())))

  console.log(result.join('\n'))
}

solution()