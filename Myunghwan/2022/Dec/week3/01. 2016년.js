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