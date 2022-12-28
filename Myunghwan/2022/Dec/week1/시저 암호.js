function solution(s, n) {
    // 유니코드로 바꾸는 매소드 charCodeAt() // A: 65 | Z: 90 | a: 97 | z: 122 
    // 유니코드를 문자열로 바꾸는 매소드 String.fromCharCode()
    // let answer = ''
    // let s_unicode = 0;
//     let s_split = s.split('')
    
//     for(let i = 0; i < s_split.length; i++){
//         s_unicode = s_split[i].charCodeAt();
//         if(s_unicode === 32){
//           s_unicode = s_unicode - n
//         } else if(s_unicode === 122){
//             s_unicode = s_unicode - 26
//         }
//         answer += String.fromCharCode(s_unicode+n)
//     }
//     return answer
    return s.split("").map((el)=>{
        if (el == " "){
            return el;
        }
        const tmp = el.charCodeAt()
        return el.toUpperCase().charCodeAt()+n > 90 
            ? String.fromCharCode(tmp+n-26) 
            : String.fromCharCode(tmp+n)
    }).join('')

}