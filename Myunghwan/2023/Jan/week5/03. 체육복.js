
function solution(n, lost, reserve) {
    // n = 학생 수 | lost = 체육복이 없는 학생 번호 | reserve = 여벌이 있는 학생 번호
    
    // 예제2
    // n = 5 [1,2,3,4,5]
    // lost = [2,4]     -> 체육복이 있는 학생 [1,3,5]
    // reserve = [3]    -> [2] 혹은 [4]만 체육복을 입을 수 있음
    // return 1,3,5, 2 or 4
    
    // 예제3
    //[1,2,3]           lost = [3]
    // [] -> 체육복이 있다 = lost에 없는 학생 [1,2]
    // reserve인 사람 [3] lost [2,4]일때 
    
    // 필요한 값
    // lost중 빌릴 수 없는 학생 : lost 수 - 빌려줄 수 있는 학생의 수
    let rent_Arr = []
    let okay_Arr = []
    let rent = [];
    let okay =[];
    //lost와 reserve의 수를 비교해서 받을 수 있는 학생 추리기
    for(let i = 0; i < lost.length; i++){
        for(let j = 0; j < reserve.length; j++){
            if(lost[i] - reserve[j] === 1 || lost[i] - reserve[j] === -1){
                rent_Arr.push(lost[i])
                okay_Arr.push(reserve[j])
            }
        }
        // 빌릴 수 있는 학생 수
        let rent_Set = new Set(rent_Arr)
        rent =  [...rent_Set].length
        
        // 빌려 줄 수 있는 학생 수
        let okay_Arr_Set = new Set(okay_Arr)
        okay = [...okay_Arr_Set].length
    }
    if(rent < okay){
        okay = rent
    } else okay-rent
    // console.log(okay)
    // console.log(rent)
    // console.log(n-rent+okay)
    return n-rent+okay
}