import { Player, getRandomInteger } from "./classes";
import { Controller } from "./game-controller";
import {
  newGridContainer,
  newGridCell,
  newRowLabelContainer,
  newColLabelChar,
  newColLabelContainer,
  newRowLabelChar,
} from "./element-factory";

const CAPITALAINDEX = 65;

const gameStatus = document.getElementById("game-status");
const gameContainer = document.getElementById("game-container");
let humanGridContainer;
let cpuGridContainer;

startNewGame();

export function startNewGame() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);
  const controller = new Controller(humanPlayer, cpuPlayer);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  humanGridContainer = newGridContainer();
  const humanRowLabelContainer = newRowLabelContainer();
  const humanColLabelContainer = newColLabelContainer();
  cpuGridContainer = newGridContainer();
  const cpuRowLabelContainer = newRowLabelContainer();
  const cpuColLabelContainer = newColLabelContainer();

  humanGridContainer.id = "human-grid-container";
  humanRowLabelContainer.id = "human-row-label-container";
  humanColLabelContainer.id = "human-col-label-container";
  cpuGridContainer.id = "cpu-grid-container";
  cpuRowLabelContainer.id = "cpu-row-label-container";
  cpuColLabelContainer.id = "cpu-col-label-container";

  for (let i = CAPITALAINDEX; i < CAPITALAINDEX + 10; i++) {
    const rowLabelChar = newRowLabelChar();
    rowLabelChar.textContent = String.fromCharCode(i);
    humanRowLabelContainer.appendChild(rowLabelChar);
  }

  for (let i = 1; i < 11; i++) {
    const colLabelChar = newColLabelChar();
    colLabelChar.textContent = i;
    humanColLabelContainer.appendChild(colLabelChar);
  }

  for (let i = CAPITALAINDEX; i < CAPITALAINDEX + 10; i++) {
    const rowLabelChar = newRowLabelChar();
    rowLabelChar.textContent = String.fromCharCode(i);
    cpuRowLabelContainer.appendChild(rowLabelChar);
  }

  for (let i = 1; i < 11; i++) {
    const colLabelChar = newColLabelChar();
    colLabelChar.textContent = i;
    cpuColLabelContainer.appendChild(colLabelChar);
  }

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

  gameContainer.appendChild(humanColLabelContainer);
  gameContainer.appendChild(cpuColLabelContainer);
  gameContainer.appendChild(humanRowLabelContainer);
  gameContainer.appendChild(humanGridContainer);
  gameContainer.appendChild(cpuRowLabelContainer);
  gameContainer.appendChild(cpuGridContainer);
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

  if (humanTurn) gameStatus.textContent = "Your turn";
  else gameStatus.textContent = "CPU's turn";

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

  if (controller.gameOver) {
    if (controller.winner === controller.humanPlayer)
      gameStatus.textContent = "You win!";
    else gameStatus.textContent = "CPU wins";
  }
}

export function handleHumanClick(controller, gridCell) {
  if (controller.currentTurn !== controller.humanPlayer || controller.gameOver)
    return;

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
