import * as el from "./element-factory";

export function buildGameboard(player) {
  const boardLetter = player.human ? "a" : "b";
  const container = el.newGridContainer();
  player.gameboard.board.forEach((col, y) => {
    col.forEach((space, x) => {
      const square = el.newSquare();
      square.id = `${boardLetter}-row-${x}-col-${y}`;
      container.appendChild(square);
    });
  });
  document.body.appendChild(container);
}

export function buildShips(player) {
  const boardLetter = player.human ? "a" : "b";
  player.gameboard.board.forEach((col, y) => {
    col.forEach((space, x) => {
      if (player.gameboard.board[x][y] !== 0) {
        const square = document.getElementById(
          `${boardLetter}-row-${x}-col-${y}`
        );
        square.classList.add(`${player.gameboard.board[x][y][0]}`, "not-hit");
      }
    });
  });
}


