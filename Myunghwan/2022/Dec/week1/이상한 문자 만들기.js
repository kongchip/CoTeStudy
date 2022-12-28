function solution(s) {
    let result = '';
    let s_split = s.split(' ');
    //[try, hello, world]
    
    for(let i = 0; i < s_split.length; i++){
        for(let j = 0; j < s_split[i].length; j++){
            if(j % 2 !== 0){
                result += s_split[i][j].toLowerCase();
            } else {
                result += s_split[i][j].toUpperCase();
            }
        }
        if(i < s_split.length -1) {
            result += ' ';
        }
    }
    return result
}