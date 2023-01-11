function solution(lottos, win_nums) {
    let rank = [6, 5, 4, 3, 2];
    
    // 최소 일치 개수
    let min = lottos.filter(el => win_nums.includes(el)).length;
    // 최대 일치 개수
    let max = min + lottos.filter(el => el===0).length;
    // 최저 순위
    let minRank = rank.indexOf(min) !== -1 ? rank.indexOf(min) + 1 : 6
    // 최고 순위
    let maxRank = rank.indexOf(max) !== -1 ? rank.indexOf(max) + 1 : 6
    
    return [maxRank, minRank];
}