function solution(maps) {
  const yLength = maps.length;
  const xLength = maps[0].length;
  const goalY = yLength - 1;
  const goalX = xLength - 1;

  // y, x, steps
  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [y, x, steps] = queue.shift();

    if (x < 0 || x >= xLength) continue;
    if (y < 0 || y >= yLength) continue;
    if (maps[y][x] === 0) continue;

    if (y === goalY && x === goalX) {
      return steps;
    }

    maps[y][x] = 0;
    queue.push([y + 1, x, steps + 1]);
    queue.push([y - 1, x, steps + 1]);
    queue.push([y, x + 1, steps + 1]);
    queue.push([y, x - 1, steps + 1]);
  }

  return -1;
}
