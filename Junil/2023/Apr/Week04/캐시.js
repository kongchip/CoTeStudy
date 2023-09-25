function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    //캐시 크기가 0인 경우는 따로 처리
    if (cacheSize === 0) return cities.length * 5;

    while (cities.length) {
        const city = cities.shift().toLowerCase();
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            answer += 1;
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(city);
            answer += 5;
        }
    }
    return answer;
}


//포기 ;;