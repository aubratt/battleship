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

export function buildHumanShips(player) {
  player.gameboard.board.forEach((col, y) => {
    col.forEach((space, x) => {
      if (player.gameboard.board[x][y] !== 0) {
        const square = document.getElementById(`a-row-${x}-col-${y}`);
        square.classList.add(`${player.gameboard.board[x][y][0]}`, "not-hit");
      }
    });
  });
}

export function buildCpuShips(player) {
  player.gameboard.board.forEach((col, y) => {
    col.forEach((space, x) => {
      const square = document.getElementById(`b-row-${x}-col-${y}`);
      square.addEventListener("click", function handleSquareClick() {
        if (player.gameboard.board[x][y] === 0) {
          player.gameboard.board[x][y] = 1;
          square.classList.add("miss");
        } else if (player.gameboard.board[x][y] !== 1) {
          square.classList.add("hit");
        }
        square.removeEventListener("click", handleSquareClick);
      });
    });
  });
}
