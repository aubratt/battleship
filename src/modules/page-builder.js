import * as el from "./element-factory";
import { Gameboard } from "./classes";

export function buildGameboard() {
  const gameboard = new Gameboard();
  // build grid container
  const container = el.newGridContainer();
  // build grid squares
  gameboard.board.forEach((col, y) => {
    col.forEach((space, x) => {
      const square = el.newSquare();
      square.id = `row-${x}-col-${y}`;
      square.textContent = `(${x}, ${y})`;
      container.appendChild(square);
    });
  });
  document.body.appendChild(container);
  // place ships
}
