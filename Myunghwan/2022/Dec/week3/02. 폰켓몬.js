function solution(nums) {
    const max = nums.length/2
    const set = [...new Set(nums)].length
    
    return max < set ? max : set
}