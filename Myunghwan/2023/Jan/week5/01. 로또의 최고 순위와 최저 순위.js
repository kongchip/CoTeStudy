function solution(lottos, win_nums) {
    let max_arr = [];
    let min_arr = [];
    let arr = [];
    let sum = 0;
    
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            if(lottos[i] === win_nums[j]){
                min_arr.push(lottos[i])
                max_arr.push(lottos[i])
            }
        }
        //최고 순위
        if(lottos[i] === 0){
            max_arr.push(lottos[i])
        }
    }
    if(max_arr.length === 6) arr.push(1)
    else if (max_arr.length === 5) arr.push(2)
    else if (max_arr.length === 4) arr.push(3)
    else if (max_arr.length === 3) arr.push(4)
    else if (max_arr.length === 2) arr.push(5)
    else arr.push(6)
    
    //최저 순위
    if(min_arr.length === 6) arr.push(1)
    else if (min_arr.length === 5) arr.push(2)
    else if (min_arr.length === 4) arr.push(3)
    else if (min_arr.length === 3) arr.push(4)
    else if (min_arr.length === 2) arr.push(5)
    else arr.push(6)
    
    // console.log('max',max_arr)
    // console.log('min',min_arr)
    return arr
}