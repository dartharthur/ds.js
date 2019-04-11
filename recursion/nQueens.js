function findAllArrangements(n) {
  const board = generateBoard(n);
  const results = [];
  _findAllArrangements(n, board, 0, results);
  return results;
}

function _findAllArrangements(n, board, row, results) {
  if (row === n) {
    const formattedOutput = formatOutput(board);
    results.push(formattedOutput);
    return;
  }

  for (let col = 0; col < board[row].length; col++) {
    togglePiece(row, col, board);
    if (!hasAnyConflicts(row, col, board)) {
      _findAllArrangements(n, board, row + 1, results);
    }
    togglePiece(row, col, board);
  }
  return;
}

function togglePiece(row, col, board) {
  if (board[row][col] === 'q') {
    board[row][col] = '-';
  } else {
    board[row][col] = 'q';
  }
}

function generateBoard(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('-'));
  }
  return board;
}

function formatOutput(board) {
  return board.map(row => row.join(''));
}

function hasRowConflict(row, board) {
  return board[row].filter(char => char === 'q').length > 1;
}

function hasColConflict(col, board) {
  let queenCount = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === 'q') queenCount++;
    if (queenCount > 1) return true;
  }
  return false;
}

function hasMajorDiagonalConflict(row, col, board) {
  let queenCount = 0;
  let rowStart = 0;
  let colStart = col - row;
  while (rowStart < board.length) {
    if (board[rowStart][colStart] === 'q') queenCount++;
    if (queenCount > 1) return true;
    rowStart++;
    colStart++;
  }
  return false;
}

function hasMinorDiagonalConflict(row, col, board) {
  let queenCount = 0;
  let rowStart = 0;
  let colStart = row + col;
  while (rowStart < board.length) {
    if (board[rowStart][colStart] === 'q') queenCount++;
    if (queenCount > 1) return true;
    rowStart++;
    colStart--;
  }
  return false;
}

function hasAnyConflicts(row, col, board) {
  return (
    hasRowConflict(row, board) ||
    hasColConflict(col, board) ||
    hasMajorDiagonalConflict(row, col, board) ||
    hasMinorDiagonalConflict(row, col, board)
  );
}
