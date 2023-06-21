// 실패율 = 스테이지 클리어 못한 사람 수 / 스테이지 도달한 모든 사람 수
// 입력값: 전체 스테이지 개수 N, 사용자가 현재 멈춰있는 스테이지 번호의 배열 stages(1~N+1)
// 출력값: 실패율이 높은 스테이지의 번호로 구성된 배열 -> 실패율의 내림차순 정렬
// -> 실패율이 같은 스테이지는 작은 번호의 스테이지가 앞으로 온다
// 스테이지 도달한 유저가 없는 경우는 실패율 0

function solution(N, stages) {
    let result = [];
    let failedUser, arrivedUser, failedPerStage;
    
    for(let i=1; i<=N; i++){
        // i번째 스테이지 실패한 유저
        failedUser = stages.filter(el => el === i).length;
        // i번째 스테이지 도달한 유저
        arrivedUser = stages.filter(el => el >= i).length;
        // i번째 스테이지 실패율
        failedPerStage = failedUser/arrivedUser;

        result.push([i, failedPerStage]);
    }

    return result.sort((a, b) => b[1] - a[1]).map(el => el[0]);
}
