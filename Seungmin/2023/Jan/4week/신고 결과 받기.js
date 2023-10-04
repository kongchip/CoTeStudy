// id_list: 유저 목록
// report: 0번째가 1번째 신고
// k: k번 이상 신고당하면 정지
// 출력값: 내가 신고한 유저의 정지 여부에 대한 메일 수신 횟수

function solution(id_list, report, k) {
    let result = [];
    let user = {};
    let reportedUser = {};
    // 같은 유저가 한 유저를 여러번 신고한 경우에 대한 중복 제거
    let newReport = [...new Set(report)];

    // user = {muzi: [muzi가 신고한 유저]}
    id_list.forEach(el => user[el] = []);
    newReport.map(el => el.split(' ')).forEach(item => user[item[0]].push(item[1]));

    // reportedUser = {frodo: 2} // 유저별 신고당한 횟수
    newReport.map(el => el.split(' ')[1]).forEach(item => {
        if(item in reportedUser) reportedUser[item] = reportedUser[item] + 1
        else reportedUser[item] = 1
    });

    // 신고당한 횟수가 k미만인 유저 삭제
    for(key in reportedUser){
        if(reportedUser[key] < k){
            delete reportedUser[key];
        }
    };

    // 각 유저가 신고한 유저가 reportedUser의 key들 중에 있으면 count 증가
    for(key in user){
        let count = 0;

        user[key].forEach(el => {
            if(el in reportedUser) count++;
        });

        result.push(count);
    }

    return result;
}