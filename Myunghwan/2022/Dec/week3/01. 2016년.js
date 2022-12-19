function solution(a, b) {
    let date = new Date(2016, a-1, b);

    // console.log(date) : 2016-05-23T15:00:00.000Z

    // console.log(`${date}`) : Tue May 24 2016 00:00:00 GMT+0900 (Korean Standard Time)

//     console.log(`${date}`.split(' ')) : [
//   'Tue',      'May',
//   '24',       '2016',
//   '00:00:00', 'GMT+0900',
//   '(Korean',  'Standard',
//   'Time)'
// ]
    return `${date}`.split(' ')[0].toUpperCase()
}


function solution(a, b) {
    const toDay = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    
    // 1월1일은 금요일이기 때문에 b가 1이면 toDay에서 FRI가 나올 수 있도록 한다
    let day = b+4;
    
    // 2월부터는 이전 월의 마지막 toDay를 넣어줘야함 
    // ex) 1월 31일 : SUN(0)  |  2월 1일 : MON(1)  | 2월 29일 : MON | 3월 1일 : TUE 
    for(let i = 0; i < a-1; i++){
        day += month[i]
    }
    return toDay[day%7]
}