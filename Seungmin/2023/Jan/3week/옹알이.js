function solution(babbling) {
    let result = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(el => {
        let temp = el;
        for(let i=0; i<arr.length; i++){
            temp = temp.split(arr[i]).join('');
        
            // 같은 발음일 경우에 대한 예외 처리 필요

            if(temp === ''){
                result++;
                break;
            }
        }
    })

    return result;
}