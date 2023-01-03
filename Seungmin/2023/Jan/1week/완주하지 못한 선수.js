function solution(participant, completion) {
    let result = '';
    let leng = participant.length;
    
    participant.sort();
    completion.sort();

    for(let i=0; i<leng; i++){
        if(participant[i] !== completion[i]){
            result = participant[i];
            break;
        }
    }

    return result;

    // 효율성 테스트 실패
    // for(let i=0; i<participant.length; i++){
    //     let runnerIdx = completion.indexOf(participant[i]);

    //     if(runnerIdx === -1) return participant[i];

    //     completion.splice(runnerIdx, 1);
    // }
}