/** 
단어 사이 공백이 여러개
문자의 시작과 끝에 공백
단어에 대문자가 섞여있는 경우 위 세가지 고려해서 테스트 해보시면 될거 같습니다.
"  tRy hello  WORLD    " 로 넣어서 테스트 해보시면 될거같습니다.
*/
function solution(s) {
    splitedArr = s.trim().split(' ');
    resultArr = splitedArr.map(el => {
        let resultString = '';
        for (let i = 0; i < el.length; i++) {
            if (i % 2 === 0) {
               resultString += el[i].toUpperCase();
            } else {
                resultString += el[i].toLowerCase();
            }
        }
        return resultString
    })
    return resultArr.join(' ');
}

/** 정확성  테스트
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.4MB)
테스트 3 〉	실패 (0.08ms, 33.4MB)
테스트 4 〉	실패 (0.19ms, 33.6MB)
테스트 5 〉	실패 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.08ms, 33.6MB)
테스트 8 〉	실패 (0.18ms, 33.4MB)
테스트 9 〉	실패 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.19ms, 33.5MB)
테스트 11 〉	실패 (0.30ms, 33.6MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
테스트 13 〉	통과 (0.18ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.5MB)
테스트 15 〉	통과 (0.17ms, 33.5MB)
테스트 16 〉	실패 (0.20ms, 33.4MB)
채점 결과
정확성: 56.3
합계: 56.3 / 100.0
*/