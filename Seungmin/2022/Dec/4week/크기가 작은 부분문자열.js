function solution(t, p) {
    var answer = 0;
    for(let i=0; i<=t.length-p.length; i++){
        if(parseInt(t.substring(i, i+p.length)) <= parseInt(p)) answer++;
    }
    return answer;
}