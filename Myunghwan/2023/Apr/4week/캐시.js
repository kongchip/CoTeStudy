function solution(cacheSize, cities) {
  let cache = new Map(); // Map 객체를 사용하여 캐시 구현
  let time = 0;
  cities.forEach((city) => {
    const cityLower = city.toLowerCase(); // 대소문자 구분을 하지 않으므로 소문자로 변환
    if (cache.has(cityLower)) {
      // cache hit
      time += 1;
      // 가장 최근에 사용한 도시를 맨 뒤로 이동 (LRU 알고리즘)
      const temp = cache.get(cityLower);
      cache.delete(cityLower);
      cache.set(cityLower, temp);
    } else {
      // cache miss
      time += 5;
      if (cache.size >= cacheSize) {
        // 캐시가 가득 차있을 경우
        if (cacheSize > 0) {
          // 캐시 크기가 0보다 큰 경우에만 가장 오래된 데이터 삭제
          cache.delete(cache.keys().next().value);
        }
      }
      cache.set(cityLower, true); // 새로운 도시를 캐시에 추가
    }
  });
  return time;
}
