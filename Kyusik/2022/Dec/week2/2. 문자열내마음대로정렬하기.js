// 1시간 넘어서 구글링 함.
// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }
// -> localeCompare 쓰니까 속도가 엄청느린거같음

function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] 
                        ? (s1 === s2 ? 0 : s1 > s2 ? 1 : -1) 
                        : (s1[n] === s2[n] ? 0 : s1[n] > s2[n] ? 1 : -1)
                       );
}