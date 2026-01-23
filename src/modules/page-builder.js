import { getRandomInteger } from "./classes";
import {
  newGridContainer,
  newGridCell,
  newTurnIndicator,
} from "./element-factory";
import "./game-controller";

let humanGridContainer;
let cpuGridContainer;
let humanTurnIndicator;
let cpuTurnIndicator;

export function displayGameboard(player) {
  const gridContainer = newGridContainer(player.human);
  const turnIndicator = newTurnIndicator();
  if (player.human) {
    gridContainer.id = "human-grid-container";
    humanGridContainer = gridContainer;
    humanTurnIndicator = turnIndicator;
    turnIndicator.textContent = "Your Turn";
  } else {
    gridContainer.id = "cpu-grid-container";
    cpuGridContainer = gridContainer;
    cpuTurnIndicator = turnIndicator;
  }
  gridContainer.appendChild(turnIndicator);

  const playerBoard = player.gameboard.board;
  playerBoard.forEach((row, rowNum) => {
    row.forEach((cell, colNum) => {
      const gridCell = newGridCell();
      gridCell.setAttribute("data-row", rowNum);
      gridCell.setAttribute("data-col", colNum);
      if (player.human && cell.ship)
        gridCell.classList.add(cell.ship.name, cell.ship.direction, "not-hit");
      gridContainer.appendChild(gridCell);
    });
  });
  document.body.appendChild(gridContainer);
}

export function handleHumanTurn(humanPlayer, cpuPlayer) {
  humanTurnIndicator.textContent = "Your Turn";

  cpuGridContainer.addEventListener("click", function handleClick(event) {
    if (
      event.target.classList.contains("turn-indicator") ||
      event.target.classList.contains("grid-container")
    )
      return;

    const gridCell = event.target;
    const row = Number(gridCell.dataset.row);
    const col = Number(gridCell.dataset.col);
    const attackResult = cpuPlayer.gameboard.receiveAttack(row, col);

    if (!attackResult.valid) return;

    cpuGridContainer.removeEventListener("click", handleClick);

    displayAttackResult(cpuPlayer, attackResult, cpuGridContainer, row, col);

    if (cpuPlayer.gameboard.allShipsSunk) {
      humanTurnIndicator.textContent = "You Win!";
      return;
    }

    humanTurnIndicator.textContent = "";
    handleCpuTurn(humanPlayer, cpuPlayer);
  });
}

function handleCpuTurn(humanPlayer, cpuPlayer) {
  cpuTurnIndicator.textContent = "CPU's Turn";

  setTimeout(() => {
    let row = getRandomInteger(9);
    let col = getRandomInteger(9);
    let attackResult = humanPlayer.gameboard.receiveAttack(row, col);

    while (!attackResult.valid) {
      row = getRandomInteger(9);
      col = getRandomInteger(9);
      attackResult = humanPlayer.gameboard.receiveAttack(row, col);
    }

    displayAttackResult(
      humanPlayer,
      attackResult,
      humanGridContainer,
      row,
      col,
    );

    if (humanPlayer.gameboard.allShipsSunk) {
      cpuTurnIndicator.textContent = "CPU Wins";
      return;
    }

    cpuTurnIndicator.textContent = "";
    handleHumanTurn(humanPlayer, cpuPlayer);
  }, 1000);
}

function displayAttackResult(player, result, gridContainer, row, col) {
  const playerBoard = player.gameboard.board;
  const boardCell = player.gameboard.board[row][col];
  const gridCell = gridContainer.querySelector(
    `[data-row="${row}"][data-col="${col}"]`,
  );

  if (result.hit) {
    gridCell.classList.add("hit");
    if (player.human) gridCell.classList.remove("not-hit");
    else gridCell.classList.add(boardCell.ship.name);

    if (boardCell.ship.sunk) {
      playerBoard.forEach((row, rowNum) => {
        row.forEach((cell, colNum) => {
          if (cell.ship && boardCell.ship.name === cell.ship.name) {
            const thisGridCell = gridContainer.querySelector(
              `[data-row="${rowNum}"][data-col="${colNum}"]`,
            );
            thisGridCell.classList.remove("hit");
            thisGridCell.classList.add(cell.ship.direction ,"sunk");
          }
        });
      });
    }
  } else gridCell.classList.add("miss");
}
