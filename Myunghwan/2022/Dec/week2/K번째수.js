function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++){
         let a = commands[i][0];
         let b = commands[i][1];
         let c = commands[i][2];
        
        let a_slice = array.slice(a-1,b).sort((a,b) => a - b)
        // [ 2, 3, 5, 6 ] [ 6 ] [1, 2, 3, 4, 5, 6, 7]
        answer.push(a_slice[c-1]) // 여기선 참고
    }
    return answer
}