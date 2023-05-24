function solution(numbers, target) {
    let count = 0
    const stack = [] // 스택을 사용하여 숫자와 현재까지의 합을 저장

    stack.push([0, 0]) // 초기 숫자와 합을 스택에 추가



    while (stack.length > 0) {
        console.log(stack)
        const [index, sum] = stack.pop()

        if (index === numbers.length) { // 탈출
            if (sum === target) {
                count++
            }
            continue
        }
        //다음 숫자
        stack.push([index + 1, sum + numbers[index]])
        stack.push([index + 1, sum - numbers[index]])
    }

    return count
}