function solution(babbling) {
    let result = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(el => {
        let temp = el;
        for(let i=0; i<arr.length; i++){
            
            if(el.includes(arr[i].repeat(2))) break;

            temp = temp.split(arr[i]).join(' ');

            if(temp.split(' ').join('') === ''){
                result++;
                break;
            }
        }
    })

    return result;
}