function solution(s) {
    let result = '';
    let arr = s.toLowerCase().split(' ');

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(j === 0) result += arr[i][j].toUpperCase();
            else result += arr[i][j]
        }
    
        if(i < arr.length-1) result += ' ';
    }

    return result;
}