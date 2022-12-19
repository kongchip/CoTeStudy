function solution(a, b) {
    let date = new Date(2016, a-1, b);
    return `${date}`.split(' ')[0].toUpperCase()
}