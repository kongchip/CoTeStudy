function solution(new_id) {

    new_id = new_id.toLowerCase()

    new_id = new_id.replace(/[^a-z0-9-_.]/g, "") // 2단계

    new_id = new_id.replace(/\.{2,}/g, ".") // 3단계

    new_id = new_id.replace(/^\.|\.$/g, "") // 4단계 


    // 5단계
    if (new_id === "") {
        new_id = "a"
    }

    // 6단계
    if (new_id.length > 15) {
        new_id = new_id.slice(0, 15)
        if (new_id[new_id.length - 1] === ".") {
            new_id = new_id.slice(0, -1)
        }
    }

    // 7단계
    if (new_id.length < 3) {
        new_id += new_id[new_id.length - 1].repeat(3 - new_id.length)
    }

    return new_id
}

// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.6MB)
// 테스트 3 〉	통과 (0.18ms, 33.5MB)
// 테스트 4 〉	통과 (0.18ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.11ms, 33.6MB)
// 테스트 7 〉	통과 (0.13ms, 33.7MB)
// 테스트 8 〉	통과 (0.22ms, 33.6MB)
// 테스트 9 〉	통과 (0.14ms, 33.6MB)
// 테스트 10 〉	통과 (0.12ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.6MB)
// 테스트 12 〉	통과 (0.20ms, 33.6MB)
// 테스트 13 〉	통과 (0.32ms, 33.5MB)
// 테스트 14 〉	통과 (0.27ms, 33.5MB)
// 테스트 15 〉	통과 (0.22ms, 33.6MB)
// 테스트 16 〉	통과 (0.25ms, 33.6MB)
// 테스트 17 〉	통과 (0.22ms, 33.6MB)
// 테스트 18 〉	통과 (0.22ms, 33.5MB)
// 테스트 19 〉	통과 (0.23ms, 33.7MB)
// 테스트 20 〉	통과 (0.23ms, 33.5MB)
// 테스트 21 〉	통과 (0.23ms, 33.6MB)
// 테스트 22 〉	통과 (0.32ms, 33.6MB)
// 테스트 23 〉	통과 (0.18ms, 33.6MB)
// 테스트 24 〉	통과 (0.16ms, 33.5MB)
// 테스트 25 〉	통과 (0.20ms, 33.5MB)
// 테스트 26 〉	통과 (0.18ms, 33.5MB)