function createNode(position, path = []) {
  return {
    position,
    path: [...path, position]
  };
}

function knightMoves(start, end) {
  const directions = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];

  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [createNode(start)];
  const visited = { [start.toString()]: true };

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const [x, y] = currentNode.position;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${currentNode.path.length - 1} moves! Here's your path:`);
      currentNode.path.forEach(pos => console.log(pos));
      return currentNode.path;
    }

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const key = `${nx},${ny}`;

      if (isValid(nx, ny) && !visited[key]) {
        visited[key] = true;
        queue.push(createNode([nx, ny], currentNode.path));
      }
    }
  }
}

module.exports = knightMoves;