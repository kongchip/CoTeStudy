function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

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
