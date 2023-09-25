const MAP_LENGTH = 10;
const BOUNDARY = MAP_LENGTH / 2;

function solution(dirs) {
  const direction = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  const stack = [...dirs].reverse();
  const set = new Set();
  let [x, y] = [0, 0];

  while (stack.length) {
    const step = stack.pop();

    const oldX = x;
    const oldY = y;

    x += direction[step][0];
    y += direction[step][1];

    if (x < -BOUNDARY || x > BOUNDARY || y < -BOUNDARY || y > BOUNDARY) {
      x -= direction[step][0];
      y -= direction[step][1];
      continue;
    }

    set.add(`[${oldX},${oldY}] => [${x},${y}]`);
    set.add(`[${x},${y}] => [${oldX},${oldY}]`);
  }

  return set.size / 2;
}
