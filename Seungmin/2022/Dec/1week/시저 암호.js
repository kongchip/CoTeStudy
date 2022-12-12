function solution(s, n) {
    let answer = '';
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let input = s.split('');
    
    for(let i=0; i<input.length; i++){
        // 공백
        if(input[i] === ' ') answer += ' ';   

        // 소문자
        else if(arr.indexOf(input[i]) !== -1){
            if(arr.indexOf(input[i])+n < arr.length) {
                answer += arr[arr.indexOf(input[i])+n]
            }
            else {
                answer += arr[n-(arr.length - arr.indexOf(input[i]))]
            }
        }

        // 대문자
        else{
            if(arr.indexOf(input[i].toLowerCase())+n < arr.length) {
                answer += arr[arr.indexOf(input[i].toLowerCase())+n].toUpperCase();
            }
            else {
                answer += arr[n-(arr.length - arr.indexOf(input[i].toLowerCase()))].toUpperCase();
            }
        }
    }
    
    return answer;
}