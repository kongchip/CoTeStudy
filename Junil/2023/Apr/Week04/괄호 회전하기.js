function solution(s) {
    const openers = ['(', '[', '{']
    const closers = [')', ']', '}']
    let count = 0

    // 모든 괄호 문자열
    for (let i = 0; i < s.length; i++) {

        let rotated = s.slice(i) + s.slice(0, i)
        let stack = []
        let isValid = true

        for (let j = 0; j < rotated.length; j++) {
            let char = rotated[j]
            // 여는 괄호일때 스텍에 넣어주기
            if (openers.includes(char)) {
                stack.push(char)
            } else { // 닫히는 괄호일때
                let index = closers.indexOf(char)
                // 스택이 비어있는지 , 여는 괄호가 알맞은지 확인
                if (stack.length === 0 || stack[stack.length - 1] !== openers[index]) {
                    isValid = false
                    break
                } else {
                    // 일치하면 여는 괄호 삭제
                    stack.pop()
                }
            }
        }

        // valid 하고 스택이 제거가 되면 카운트 증가시키기
        if (isValid && stack.length === 0) {
            count++
        }
    }

    return count
}
