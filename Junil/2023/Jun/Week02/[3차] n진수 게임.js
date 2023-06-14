// 처음 작성한 코드 
// 총원에 따른 내 차례의 변화를 유기한 코드임 (무조건 2인)

// function solution(n, t, m, p) {
//     let str = ""
//     let ans = "";
//     let number = 0
//     const max = (t - 1) * m + p;

//     for (let i = 0; str.length < max; i++) {
//         str += i.toString(n)
//     }

//     if(p % 2 !== 0){
//         for (let j = 0; j <= str.length; j++) {
//             if (j % 2 === 0) {
//             ans += str[j];
//             }
//         }        
//     } else {
//         for (let j = 0; j <= str.length; j++) {
//             if (j % 2 !== 0) {
//             ans += str[j];
//             }
//         }          
//     }


//     console.log(ans)


//     return ans.substring(0, t).toUpperCase()
// }


function solution(n, t, m, p) {
    let str = ""
    let ans = ""
    const max = (t - 1) * m + p; // 내 차례까지 돌아오는 str의 최대 길이

    for (let i = 0; str.length < max; i++) {
        str += i.toString(n)
    }

    for (let j = p - 1; j <= str.length; j += m) {
        ans += str[j]
    }

    return ans.substring(0, t).toUpperCase()
}