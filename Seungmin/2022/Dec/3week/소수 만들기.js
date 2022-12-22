function solution(nums) {
    let answer = 0;
    let check = true;
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k];
                
                for(let l=2; l<=Math.floor(Math.sqrt(sum)); l++){
                    if(sum%l === 0){
                        check = false;
                        break;
                    }
                }
                if(check) answer++;
                check = true;
            }
        }
    }
    
    return answer;
}