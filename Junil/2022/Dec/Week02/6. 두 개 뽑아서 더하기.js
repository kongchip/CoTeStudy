// 두 개 뽑아서 더하기

function solution(numbers) {
    const sumNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {

            if (i !== j && !sumNumbers.includes(numbers[i] + numbers[j])) {
                sumNumbers.push(numbers[i] + numbers[j])
            }
        }
    }

    return sumNumbers.sort((a, b) => a - b)
}


//   테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.21ms, 33.4MB)
// 테스트 7 〉	통과 (1.72ms, 33.5MB)
// 테스트 8 〉	통과 (0.97ms, 33.3MB)
// 테스트 9 〉	통과 (0.71ms, 33.4MB)