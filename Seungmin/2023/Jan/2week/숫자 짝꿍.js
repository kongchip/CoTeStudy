function solution(X, Y) {
    let result = '';
    let arrX = X.split('').map(Number);
    let arrY = Y.split('').map(Number);

    for(let i=0; i<10; i++){
        let num = Math.min(arrX.filter(el => el ===  i).length, arrY.filter(el => el === i).length);
        result += String(i).repeat(num);
    }

    if(result === '') return '-1';
    if(Number(result) === 0) return '0';

    return result.split('').sort((a, b) => b - a).join('');

    
    // 역시 시간초과..
    // let result = '';
    // let leng = Math.max(X.length, Y.length);
    // let arr = Y.split('');

    // for (let i=0; i<leng; i++){
    //     if(X[i] === undefined || arr.length === 0) break;
        
    //     let idx = arr.indexOf(X[i]);

    //     if(idx !== -1){
    //         result += X[i];
    //         arr.splice(idx, 1);
    //     }
    // }

    // return result !== '' ? String(Number(result)).split('').sort((a, b) => b - a).join('') : '-1';
}