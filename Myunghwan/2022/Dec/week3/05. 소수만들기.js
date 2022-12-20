function solution(nums) {
    let answer = 0
    let sum = 0;
    
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1;j++){
            for(let k = j+1; k < nums.length;k++){
                sum = nums[i] + nums[j] + nums[k];
                let count = 0;
                for(let n = 1; n <= sum; n++){
                    if(sum % n === 0) count++;
                }
                if(count === 2) answer++;
            }
        }
    }
    return answer;
}