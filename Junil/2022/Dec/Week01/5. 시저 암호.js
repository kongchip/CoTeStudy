//시저 암호

function solution(s, n) {
    let ciphertext = ""

    for (let i = 0; i < s.length; i++) {
        let sNum = s.charCodeAt(i)

        if (sNum >= 65 && sNum <= 90) {
            // 대문자 ASCII code 65-90 
            // A = 65  
            ciphertext += String.fromCharCode((sNum - 65 + n) % 26 + 65)
        } else if (sNum >= 97 && sNum <= 122) {
            // 소문자 ASCII code 97-122
            ciphertext += String.fromCharCode((sNum - 97 + n) % 26 + 97)
        } else {
            ciphertext += s[i]
        }
    }

    return ciphertext
}


//   테스트 1 〉	통과 (0.14ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.14ms, 33.5MB)
// 테스트 10 〉	통과 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.5MB)
// 테스트 12 〉	통과 (0.21ms, 33.4MB)
// 테스트 13 〉	통과 (4.26ms, 37.1MB)