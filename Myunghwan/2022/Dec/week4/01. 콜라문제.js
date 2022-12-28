function solution(a, b, n) {
    // a = 마트에 주어야할 병수   b = 마트에서 주는 병 수  n = 가지고 있는 빈 병의 개수
    // 받은 콜라의 수
    let payback = 0;
    let sum = 0
    // 가지고 있는 빈 병의 수가 마트에 주어야할 병의 수 보다 작을때까지 -> n이 a보다 작을때 까지
    while(n >= a){
        payback = Math.floor(n / a) * b;
        n = payback + n % a
        sum += payback
    }
    return sum
}