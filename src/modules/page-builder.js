import { Player, getRandomInteger } from "./classes";
import { Controller } from "./game-controller";
import {
  newGridContainer,
  newGridCell,
  newTurnIndicator,
} from "./element-factory";

let humanGridContainer;
let humanTurnIndicator;
let cpuGridContainer;
let cpuTurnIndicator;

startNewGame();

export function startNewGame() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);
  const controller = new Controller(humanPlayer, cpuPlayer);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  humanGridContainer = newGridContainer();
  humanTurnIndicator = newTurnIndicator();
  cpuGridContainer = newGridContainer();
  cpuTurnIndicator = newTurnIndicator();

  humanGridContainer.id = "human-grid-container";
  cpuGridContainer.id = "cpu-grid-container";
  humanTurnIndicator.textContent = "Your Turn";

  humanGridContainer.appendChild(humanTurnIndicator);
  cpuGridContainer.appendChild(cpuTurnIndicator);

  humanPlayer.gameboard.board.forEach((row, rowNum) => {
    row.forEach((cell, colNum) => {
      const gridCell = newGridCell();
      gridCell.setAttribute("data-row", rowNum);
      gridCell.setAttribute("data-col", colNum);
      if (cell.ship)
        gridCell.classList.add(cell.ship.name, cell.ship.direction, "not-hit");
      humanGridContainer.appendChild(gridCell);
    });
  });
  cpuPlayer.gameboard.board.forEach((row, rowNum) => {
    row.forEach((cell, colNum) => {
      const gridCell = newGridCell();
      gridCell.setAttribute("data-row", rowNum);
      gridCell.setAttribute("data-col", colNum);
      gridCell.addEventListener("click", (event) => {
        handleHumanClick(controller, event.target);
      });
      cpuGridContainer.appendChild(gridCell);
    });
  });

  document.body.appendChild(humanGridContainer);
  document.body.appendChild(cpuGridContainer);
}

export function renderGameboard(controller, gridCell) {
  const humanTurn = controller.currentTurn === controller.humanPlayer;
  const boardCell = humanTurn
    ? controller.humanPlayer.gameboard.board[gridCell.dataset.row][
        gridCell.dataset.col
      ]
    : controller.cpuPlayer.gameboard.board[gridCell.dataset.row][
        gridCell.dataset.col
      ];

  if (boardCell.ship) {
    gridCell.classList.add(boardCell.ship.name);
    gridCell.classList.add("hit");
    gridCell.classList.remove("not-hit");

    if (boardCell.ship.sunk) {
      controller.currentTurn.gameboard.board.forEach((row, rowNum) => {
        row.forEach((cell, colNum) => {
          if (cell.ship && boardCell.ship.name === cell.ship.name) {
            let thisGridCell;
            humanTurn
              ? (thisGridCell = humanGridContainer.querySelector(
                  `[data-row="${rowNum}"][data-col="${colNum}"]`,
                ))
              : (thisGridCell = cpuGridContainer.querySelector(
                  `[data-row="${rowNum}"][data-col="${colNum}"]`,
                ));
            thisGridCell.classList.add(cell.ship.direction, "sunk");
            thisGridCell.classList.remove("hit");
          }
        });
      });
    }
  } else gridCell.classList.add("miss");

  if (humanTurn) {
    humanTurnIndicator.textContent = "Your Turn";
    cpuTurnIndicator.textContent = "";
  } else {
    cpuTurnIndicator.textContent = "CPU's Turn";
    humanTurnIndicator.textContent = "";
  }

  if (controller.gameOver) {
    controller.winner === controller.humanPlayer
      ? (humanTurnIndicator.textContent = "You Win!")
      : (humanTurnIndicator.textContent = "");
    controller.winner === controller.cpuPlayer
      ? (cpuTurnIndicator.textContent = "CPU Wins")
      : (cpuTurnIndicator.textContent = "");
  }
}

export function handleHumanClick(controller, gridCell) {
  if (controller.gameOver) return;
  if (controller.currentTurn !== controller.humanPlayer) return;

  const result = controller.processMove(
    controller.cpuPlayer,
    Number(gridCell.dataset.row),
    Number(gridCell.dataset.col),
  );

  if (!result.valid) return;

  controller.nextTurn();
  renderGameboard(controller, gridCell);
  if (controller.currentTurn === controller.cpuPlayer)
    handleCpuTurn(controller);
}

function handleCpuTurn(controller) {
  if (controller.gameOver) return;
  setTimeout(() => {
    let row = getRandomInteger(9);
    let col = getRandomInteger(9);
    let result = controller.processMove(controller.humanPlayer, row, col);

    while (!result.valid) {
      row = getRandomInteger(9);
      col = getRandomInteger(9);
      result = controller.processMove(controller.humanPlayer, row, col);
    }

    controller.nextTurn();
    renderGameboard(
      controller,
      humanGridContainer.querySelector(
        `[data-row="${row}"][data-col="${col}"]`,
      ),
    );
  }, 1000);
}
