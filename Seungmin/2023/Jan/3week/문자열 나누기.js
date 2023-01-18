// n번째 문자로 된 key가 객체에 있는지 확인
// 있으면 그냥 해당 문자의 value만 증가
// 없으면 해당 문자에 대한 속성값을 객체에 추가하고
// 문자의 value와 일치하는 문자(key)가 있는지 확인(자신 제외) -> 있으면 result 증가시키고 객체 초기화

function solution(s) {
    let result = 0, first = '', num1 = 0, num2 = 0;
    let leng = s.length;

    for(let i=0; i<leng; i++){
        if(i === leng-1){
            result++;
            break;
        }

        if(first === '') first = s[i];

        s[i] === first ? num1++ : num2++;

        if(num1 === num2){
            result++;
            num1 = 0;
            num2 = 0;
            first = '';
        }
        
    }

    return result;


    // 아 문제 설명 진짜ㅠㅠㅠㅠ
    // let result = 0;
    // let leng = s.length;
    // let obj = {};
    // let str = '';

    // for(let i=0; i<leng; i++){
    //     if(i === leng-1){
    //         result++;
    //         break;
    //     }
        
    //     str = s[i];
        
    //     str in obj ? obj[str] = obj[str] + 1 : obj[str] = 1;

    //     if(Object.keys(obj).find(key => obj[key] === obj[str] && key !== str)){
    //         result++;
    //         obj = {};
    //     }
    // }

    // return result;
}