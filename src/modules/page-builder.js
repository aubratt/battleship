import { newGridContainer, newGridSquare } from "./element-factory";
import "./game-controller";

export function displayHumanGameboard(player) {
  const gridContainer = newGridContainer();

  player.gameboard.board.forEach((col, y) => {
    col.forEach((square, x) => {
      const gridSquare = newGridSquare();
      if (player.gameboard.board[x][y] !== 0)
        gridSquare.classList.add(
          player.gameboard.board[x][y].name,
          player.gameboard.board[x][y].direction,
          "not-hit"
        );
      gridContainer.appendChild(gridSquare);
    });
  });
  document.body.appendChild(gridContainer);
}
