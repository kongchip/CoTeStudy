function solution(t, p) {
    let answer = 0;
    let arr = []
    for(let i = 0; i < t.length; i++){
        arr.push(t.slice(i, p.length+i))
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j].length === p.length && Number(arr[j]) <= Number(p)) {
            answer++
        }
    }
    return answer
}