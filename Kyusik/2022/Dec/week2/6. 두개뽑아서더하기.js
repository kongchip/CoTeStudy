function solution(numbers) {
    let plusedArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            plusedArr.push(numbers[i] + numbers[j])
        }
    }
    const plusedSet = new Set(plusedArr);
    const resultArr = [...plusedSet];
    return resultArr.sort((a, b) => a - b);
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.15ms, 33.4MB)
// 테스트 6 〉	통과 (1.43ms, 33.4MB)
// 테스트 7 〉	통과 (0.53ms, 33.6MB)
// 테스트 8 〉	통과 (0.50ms, 33.5MB)
// 테스트 9 〉	통과 (0.46ms, 33.6MB)

// function solution(numbers) {
//     let plusedArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             plusedArr.push(numbers[i] + numbers[j])
//         }
//     }
//     const resultArr = plusedArr.filter((el, idx) => {
//         return plusedArr.indexOf(el) === idx;
//     });
//     return resultArr.sort((a, b) => a - b);
// }

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.19ms, 33.5MB)
// 테스트 6 〉	통과 (0.21ms, 33.6MB)
// 테스트 7 〉	통과 (2.09ms, 33.6MB)
// 테스트 8 〉	통과 (1.64ms, 33.8MB)
// 테스트 9 〉	통과 (0.68ms, 33.6MB)