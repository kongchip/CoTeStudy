function solution(survey, choices) {
    const points = [-3, -2, -1, 0, 1, 2, 3]
    const types = ['RT', 'CF', 'JM', 'AN']
    const pointBoard = survey.reduce((a, key, i) => {
        if (types.includes(key)) {
            a[key] = (a[key] || 0) + points[choices[i] - 1]
            return a
        }
        const rKey = key[1] + key[0]
        a[rKey] = (a[rKey] || 0) - points[choices[i] - 1]
        return a
    }, {})
    return types.map(type => (pointBoard[type] <= 0 || !pointBoard[type] ? type[0] : type[1])).join('')
}

// 포기..
// 테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.5MB)
// 테스트 5 〉	통과 (0.11ms, 33.6MB)
// 테스트 6 〉	통과 (0.10ms, 33.5MB)
// 테스트 7 〉	통과 (0.32ms, 33.5MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.20ms, 33.6MB)
// 테스트 10 〉	통과 (0.21ms, 33.6MB)
// 테스트 11 〉	통과 (0.21ms, 33.5MB)
// 테스트 12 〉	통과 (0.39ms, 33.5MB)
// 테스트 13 〉	통과 (0.26ms, 33.5MB)
// 테스트 14 〉	통과 (0.31ms, 33.6MB)
// 테스트 15 〉	통과 (0.32ms, 33.4MB)
// 테스트 16 〉	통과 (0.33ms, 33.5MB)
// 테스트 17 〉	통과 (0.33ms, 33.4MB)
// 테스트 18 〉	통과 (0.34ms, 33.5MB)
// 테스트 19 〉	통과 (0.34ms, 33.5MB)
// 테스트 20 〉	통과 (0.36ms, 33.5MB)