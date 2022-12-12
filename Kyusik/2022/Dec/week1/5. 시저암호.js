function solution(s, n) {
    let resultStr = '';
    
    for (let i = 0; i < s.length; i++) {
        // 아스키코드로 변환
        const ascii = s.charCodeAt(i);
        
        // 대문자 처리
        if (65 <= ascii && ascii <= 90) {
            // 90 넘어간다면 나머지를 ASC에 더하고 변환
            if (ascii + n > 90 ) {
                resultStr += String.fromCharCode(64 + ((ascii + n) % 90));
            }
            // 90 안넘어가면 걍 더해서 변환
            else {
                resultStr += String.fromCharCode(ascii + n);   
            }
        }
        
        // 소문자 처리 -> 대문자랑 동일한 로직
        if (97 <= ascii && ascii <= 122) {
            if (ascii + n > 122) {
                resultStr += String.fromCharCode(96 + ((ascii + n) % 122));
            } else {
                resultStr += String.fromCharCode(ascii + n);    
            }
        }
        // 띄어쓰기 처리
        if (ascii === 32) {
            resultStr += ' ';
        }
    }
    return resultStr;
}