function solution(s) {
    let answer = '';
    let s_split = s.split(' ');
    //[try, hello, world]
    
    for(let i = 0; i < s_split.length; i++){
        for(let j = 0; j < s_split[i].length; j++){
            if(j % 2 !== 0){
                answer += s_split[i][j].toLowerCase();
            } else {
                answer += s_split[i][j].toUpperCase();
            }
        }
        if(i < s_split.length -1) {
            answer += ' ';
        }
    }
    return answer
}