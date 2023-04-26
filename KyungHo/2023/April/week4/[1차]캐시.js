function solution(cacheSize, cities) {
  let cacheCount = 0;
  let cache = [];
  cities = cities.map((vl) => vl.toUpperCase());

  for (val of cities) {
    if (cache.indexOf(val) !== -1) {
      cacheCount += 1;
      let copy = cache.filter((v) => v !== val);
      cache = [...copy, val];
    } else {
      cacheCount += 5;
      if (cache.length === cacheSize) {
        if (cacheSize !== 0) {
          let copy = cache.slice(1);
          cache = [...copy, val];
        }
      } else {
        cache.push(val);
      }
    }
  }

  return cacheCount;
}
