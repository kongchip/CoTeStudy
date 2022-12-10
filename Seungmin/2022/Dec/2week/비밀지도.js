function solution(n, arr1, arr2) {
    let answer = [];
    
    let binary = (arr) => {
        let binaryArr = arr.map(el => el.toString(2)).map(el => {
            let leng = el.length
            for(let i=0; i<n-leng; i++){
                el = '0' + el
            }
            return el
        });
        
        return binaryArr;
    }
    
    let binary1 = binary(arr1);
    let binary2 = binary(arr2);
    
    for(let i = 0; i < n; i++){
        let str = '';
        let el1 = binary1[i].split('').map(Number);
        let el2 = binary2[i].split('').map(Number);
        
        for(let j = 0; j < n; j++){
            let element = el1[j] + el2[j];
            str += element === 0 ? ' ' : '#'
        }
        
        answer.push(str);
    }
    
    return answer;
}