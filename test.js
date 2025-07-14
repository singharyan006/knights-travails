const knightMoves = require('./index');

console.log("Test 1:");
knightMoves([0, 0], [1, 2]); // 1 move

console.log("\nTest 2:");
knightMoves([0, 0], [3, 3]); // 2 moves

console.log("\nTest 3:");
knightMoves([0, 0], [7, 7]); // ~6 moves
