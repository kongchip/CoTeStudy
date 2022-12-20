function solution(n) {
    // 에라토스테네스의 체 함수
    function eara(n){
        // 0부터 n까지 true가 있는 배열 만들고, 0과 1은 false로 바꿈
        let arr = Array(n + 1).fill(true).fill(false, 0, 2);
        // i는 n의 제곱근까지만 보면 됨 -> 어차피 i의 배수는 다 소수가 아니기 때문.
        for (let i = 2 ; i <= Math.sqrt(n); i++) {
            // i번째 요소가 true라면(소수라면)
            if (arr[i]) {
                // n까지의 i의 배수들을 false로 바꿔줌
                for (let j = i * i; j <= n; j += i) {
                    arr[j] = false;
                }
            }
        }

        return arr;
    }
    let isPrimes = eara(n);

    // 소수의 개수 구하기 - 에라토스테네스의 체 배열에서 true인 애들의 갯수
    return isPrimes.filter(e => e).length;

}