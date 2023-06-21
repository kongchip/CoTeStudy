// 빈병 a개 당 콜라 b병
// 가지고 있는 빈병 수 n
// 한번 교환으로 받을 수 있는 콜라 수 = n/a*b
function solution(a, b, n) {
    let result = 0;
    let totalBottle = n;
    let rest = 0;
    // n이 a보다 크거나 같을때 까지 반복문
    while(totalBottle >= a){
        result += Math.floor(totalBottle/a)*b;
        rest = totalBottle % a;
        totalBottle = Math.floor(totalBottle/a)*b + rest;
        
        // if(totalBottle%a === 0){
        //     result += totalBottle/a*b;
        // } else {
        //     result += Math.floor(totalBottle/a)*b;
        //     rest = totalBottle % a;
        // }
        // totalBottle = Math.floor(totalBottle/a)*b + rest;
        // rest = 0;
    }
    return result;
}