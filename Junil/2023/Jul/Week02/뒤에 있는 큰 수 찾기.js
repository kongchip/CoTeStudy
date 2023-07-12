function solution(numbers) {
    // curr를 기준으로 다음 인덱스의 숫자들과 비교하여 curr 보다 큰 수가 있다면 그 큰 수를 ans 배열에 넣어주기
    // 큰 수가 없다면 -1 을 배열에 넣어주기
    const ans = []

    while (ans.length !== numbers.length) {
        let idx = 0
        let number = -1

        for (let i = idx + 1; i < numbers.length; i++) {
            if (numbers[idx] < numbers[i]) {
                number = numbers[i]
                break
            }
            ans.push(number)
        }

        idx++
    }

    return ans
}