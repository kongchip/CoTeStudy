function solution(N, stages) {
    let failureRate = [];
    // 실패율 계산
    for (let current = 1; current <= N; current++) {
        let reached = 0;
        let uncleared = 0;
        stages.forEach(el => {
            if (current <= el) reached++;
            if (current === el) uncleared++;
        })
        failureRate.push({idx : current, rate : uncleared / reached});
    }
    // 실패율에 따라 정렬
    failureRate.sort((a, b) => {
        if (a.rate > b.rate) return -1;
        if (a.rate < b.rate) return 1;
        return 0;
    })
    // 최종 결과
    return failureRate.map(el => el.idx);
}