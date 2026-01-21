import { getRandomInteger } from "./classes";
import {
  newGridContainer,
  newGridSquare,
  newTurnIndicator,
} from "./element-factory";
import "./game-controller";

export function displayHumanGameboard(player) {
  const gridContainer = newGridContainer();
  const turnIndicator = newTurnIndicator();

  gridContainer.id = "human-grid-container";
  turnIndicator.textContent = "Your Turn";
  gridContainer.appendChild(turnIndicator);

  const playerBoard = player.gameboard.board;

  playerBoard.forEach((col, y) => {
    col.forEach((square, x) => {
      const gridSquare = newGridSquare();
      if (playerBoard[x][y] !== 0)
        gridSquare.classList.add(
          playerBoard[x][y].name,
          playerBoard[x][y].direction,
          "not-hit",
        );
      gridContainer.appendChild(gridSquare);
    });
  });
  document.body.appendChild(gridContainer);
}

export function displayCpuGameboard(player) {
  const gridContainer = newGridContainer();
  const turnIndicator = newTurnIndicator();

  gridContainer.id = "cpu-grid-container";
  gridContainer.appendChild(turnIndicator);

  const playerBoard = player.gameboard.board;

  playerBoard.forEach((col, y) => {
    col.forEach((square, x) => {
      const gridSquare = newGridSquare();
      gridSquare.id = `cs-${x}-${y}`;
      gridContainer.appendChild(gridSquare);
    });
  });
  document.body.appendChild(gridContainer);
}

export function handleHumanTurn(humanPlayer, cpuPlayer) {
  const gridContainer = document.getElementById("cpu-grid-container");
  const turnIndicator = gridContainer.querySelector(".turn-indicator");
  const cpuBoard = cpuPlayer.gameboard.board;

  gridContainer.addEventListener("click", function handleClick(event) {
    if (
      event.target.classList.contains("turn-indicator") ||
      event.target.classList.contains("grid-container")
    )
      return;

    const gridSquare = event.target;
    const x = Number(gridSquare.id.substring(3, 4));
    const y = Number(gridSquare.id.substring(5, 6));
    let boardSquare = cpuBoard[x][y];

    if (boardSquare === 0) {
      boardSquare = 1;
      gridSquare.classList.add("miss");
      gridContainer.removeEventListener("click", handleClick);
      handleCpuTurn(humanPlayer);
    } else if (boardSquare !== 1 && !gridSquare.classList.contains("hit")) {
      boardSquare.hit();
      gridSquare.classList.add("hit", boardSquare.name);
      turnIndicator.textContent = `You hit CPU's ${boardSquare.name}`;

      if (boardSquare.sunk) {
        cpuBoard.forEach((row, x) => {
          row.forEach((square, y) => {
            if (square.name === boardSquare.name) {
              const shipGridSquare = document.getElementById(`cs-${x}-${y}`);
              shipGridSquare.classList.add(square.direction, "sunk");
              turnIndicator.textContent = `You sunk CPU's ${boardSquare.name}`;
            }
          });
        });
      }
      gridContainer.removeEventListener("click", handleClick);
      handleCpuTurn(humanPlayer);
    }
  });
}

function handleCpuTurn(humanPlayer) {
  const x = getRandomInteger(9);
}
