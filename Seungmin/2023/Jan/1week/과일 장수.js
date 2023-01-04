function solution(k, m, score) {
    let result = 0;
    let leng = score.length;
    
    score.sort((a, b) => b-a);

    for(let i=0; i<leng; i+=m){
        
        let box = score.slice(i, i+m);
        
        if (box.length === m) {
            result += Math.min(...box) * m;
        } else {
            break;
        }

    }

    return result;
}