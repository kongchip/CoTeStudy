// function solution(s){
//     let sum1 = 0;
//     let sum2 = 0;
    
//     if(s[0] === '('){
//         for(let i = 0; i < s.length; i++){
//             if(s[i] === '(') sum1++
//             if(s[i] === ')') sum2++
//         }
//         return sum1 === sum2 ? true : false
//     }
//     if(s[0] === ')') return false
// }

function solution(s){    
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return !stack.length;
}