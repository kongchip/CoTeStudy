function solution(number, limit, power) {
    // 1. 1,2,3,4,5 번 기사, 본인 번호의 약수의 개수가 기사의 공격력
    // 2. limit을 초과했을 때 인당 최대 공격력은 power
    // 3. 전체 공격력을 구하라
    // 4. 약수 날먹 공식 안통함 O(N) => 제곱근으로 반복횟수 줄이기 O(sqrt N)
    let answer = 0

    for (let i = 1; i <= number; i++) {

        let count = 0
        for (let j = 0; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                count++
                if (i / j !== j) {
                    count++
                }
            }
        }

        if (count > limit) {
            count = power
        }

        answer += count
    }
    return answer
}
