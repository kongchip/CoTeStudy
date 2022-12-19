function solution(nums) {
    //중복제거??
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i])
        } else null;
    }
    return arr.length >= nums.length / 2 ? nums.length / 2 : arr.length
}

// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.13ms, 33.5MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.5MB)
// 테스트 11 〉	통과 (0.12ms, 33.4MB)
// 테스트 12 〉	통과 (0.80ms, 33.4MB)
// 테스트 13 〉	통과 (0.46ms, 33.4MB)
// 테스트 14 〉	통과 (0.38ms, 32.2MB)
// 테스트 15 〉	통과 (0.23ms, 32MB)
// 테스트 16 〉	통과 (26.70ms, 34MB)
// 테스트 17 〉	통과 (21.71ms, 33.9MB)
// 테스트 18 〉	통과 (14.64ms, 33.9MB)
// 테스트 19 〉	통과 (5.89ms, 33.8MB)
// 테스트 20 〉	통과 (0.72ms, 33.9MB)