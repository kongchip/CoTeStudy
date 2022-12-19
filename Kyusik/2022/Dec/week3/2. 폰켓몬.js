function solution(nums) {
    // 일반적인 경우, 주어진 nums배열의 길이를 2로 나누면 가질 수 있는 최대 폰켓몬 갯수
    // 하지만 nums배열의 중복된 요소를 제거한 길이가 위의 폰켓몬 갯수보다 작다면?
    // 중복된 요소를 제거한 길이가 곧 가질 수 있는 최대 폰켓몬 갯수가 된다.
    let select = nums.length / 2;
    let newSet = new Set(nums);
    console.log(newSet.size)
    if(newSet.size > select) return select
    return newSet.size
}