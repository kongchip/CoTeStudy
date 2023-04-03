function solution(n, words) {
    // 이전 words 의 idx 0, -1 과 비교 => true
    // 현 word 가 이전 words include 여부 확인
    // 이전까지의 배열과 비교해야함
    // 실패까지 반복

    let usedWords = [words[0]]
    let formerWord = words[0]
    let turn = 1

    for (let i = 1; i < words.length; i++) {
        let player = (i % n) + 1

        if (usedWords.includes(words[i]) || formerWord[formerWord.length - 1] !== words[i][0]) {
            return [player, turn]
        }

        if (player === n) {
            turn++
        }

        formerWord = words[i]
        usedWords.push(words[i])
    }

    return [0, 0]
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.15ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.14ms, 33.4MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
// 테스트 11 〉	통과 (0.15ms, 33.5MB)
// 테스트 12 〉	통과 (0.16ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.6MB)
// 테스트 14 〉	통과 (0.06ms, 33.6MB)
// 테스트 15 〉	통과 (0.06ms, 33.5MB)
// 테스트 16 〉	통과 (0.09ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.4MB)
// 테스트 19 〉	통과 (0.06ms, 33.5MB)
// 테스트 20 〉	통과 (0.16ms, 33.5MB)