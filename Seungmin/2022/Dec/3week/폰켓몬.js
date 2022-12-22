function solution(nums) {
    // 중복 제거
    let poketmon = [...new Set(nums)];
    
    // nums의 길이/2 보다 중복제거한 배열의 길이가 크면 nums의 길이/2 리턴, 작으면 중복제거한 배열이 길이를 리턴
    return poketmon.length > nums.length/2 ? nums.length/2 : poketmon.length;
}