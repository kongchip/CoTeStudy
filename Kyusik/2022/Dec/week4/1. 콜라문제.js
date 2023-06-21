function solution(a, b, n) {
    let count = 0;
    while (n >= a) {
        let remain = 0;
        remain = n % a;
        n = Math.floor(n / a) * b;
        count += n;
        n += remain;
    }
    return count;
}