import { Player, getRandomInteger } from "./classes";
import { Controller } from "./game-controller";
import {
  newGridContainer,
  newGridCell,
  newRowLabelContainer,
  newColLabelChar,
  newColLabelContainer,
  newRowLabelChar,
  newOptionsContainer,
  newRandomizeShipsBtn,
  newStartGameBtn,
  newPlayAgainBtn,
} from "./element-factory";

const CAPITAL_A_INDEX = 65;

const gameStatus = document.getElementById("game-status");
const gameContainer = document.getElementById("game-container");
let humanGridContainer;
let optionsContainer;
let cpuGridContainer;

initGameSetup();

function initGameSetup() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);
  const controller = new Controller(humanPlayer, cpuPlayer);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  const humanRowLabelContainer = newRowLabelContainer();
  const humanColLabelContainer = newColLabelContainer();
  const cpuRowLabelContainer = newRowLabelContainer();
  const cpuColLabelContainer = newColLabelContainer();

  humanGridContainer = newGridContainer();
  cpuGridContainer = newGridContainer();

  optionsContainer = newOptionsContainer();
  const randomizeShipsBtn = newRandomizeShipsBtn();
  const startGameBtn = newStartGameBtn();

  humanRowLabelContainer.id = "human-row-label-container";
  humanColLabelContainer.id = "human-col-label-container";
  cpuRowLabelContainer.id = "cpu-row-label-container";
  cpuColLabelContainer.id = "cpu-col-label-container";

  humanGridContainer.id = "human-grid-container";
  cpuGridContainer.id = "cpu-grid-container";

  gameStatus.textContent = "Set your board";

  for (let i = CAPITAL_A_INDEX; i < CAPITAL_A_INDEX + 10; i++) {
    const rowLabelChar = newRowLabelChar();
    rowLabelChar.textContent = String.fromCharCode(i);
    humanRowLabelContainer.appendChild(rowLabelChar);
  }
  for (let i = 1; i < 11; i++) {
    const colLabelChar = newColLabelChar();
    colLabelChar.textContent = i;
    humanColLabelContainer.appendChild(colLabelChar);
  }
  for (let i = CAPITAL_A_INDEX; i < CAPITAL_A_INDEX + 10; i++) {
    const rowLabelChar = newRowLabelChar();
    rowLabelChar.textContent = String.fromCharCode(i);
    cpuRowLabelContainer.appendChild(rowLabelChar);
  }
  for (let i = 1; i < 11; i++) {
    const colLabelChar = newColLabelChar();
    colLabelChar.textContent = i;
    cpuColLabelContainer.appendChild(colLabelChar);
  }

  renderHumanSetupBoard(humanPlayer);
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

  randomizeShipsBtn.addEventListener("click", () => {
    // TODO continue trying to get this btn to work
    humanPlayer.gameboard.board = null;
    humanPlayer.gameboard.ships = null;
    humanPlayer.gameboard.placeAllShipsRandomly();
    renderHumanSetupBoard(humanPlayer);
  });
  startGameBtn.addEventListener("click", () => {
    startNewGame(controller);
  });

  gameContainer.appendChild(humanRowLabelContainer);
  gameContainer.appendChild(humanColLabelContainer);
  gameContainer.appendChild(cpuRowLabelContainer);
  gameContainer.appendChild(cpuColLabelContainer);

  gameContainer.appendChild(humanGridContainer);
  gameContainer.appendChild(cpuGridContainer);

  gameContainer.appendChild(optionsContainer);
  optionsContainer.appendChild(randomizeShipsBtn);
  optionsContainer.appendChild(startGameBtn);
}

function renderHumanSetupBoard(humanPlayer) {
  humanPlayer.gameboard.board.forEach((row, rowNum) => {
    row.forEach((cell, colNum) => {
      let gridCell = humanGridContainer.querySelector(
        `[data-row="${rowNum}"][data-col="${colNum}"]`,
      );
      if (gridCell === null) {
        gridCell = newGridCell();
        gridCell.setAttribute("data-row", rowNum);
        gridCell.setAttribute("data-col", colNum);
      } else gridCell.className = "cell";
      if (cell.ship)
        gridCell.classList.add(cell.ship.name, cell.ship.direction, "not-hit");
      humanGridContainer.appendChild(gridCell);
    });
  });
}

export function startNewGame(controller) {
  optionsContainer.style.display = "none";
  gameStatus.textContent = "Your turn";
  controller.currentTurn = controller.humanPlayer;
}

export function renderGameplayBoards(controller, gridCell) {
  const humanTurn = controller.currentTurn === controller.humanPlayer;
  const boardCell = humanTurn
    ? controller.humanPlayer.gameboard.board[gridCell.dataset.row][
        gridCell.dataset.col
      ]
    : controller.cpuPlayer.gameboard.board[gridCell.dataset.row][
        gridCell.dataset.col
      ];

  humanTurn
    ? (gameStatus.textContent = "Your turn")
    : (gameStatus.textContent = "CPU's Turn");

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
    showPlayAgainBtn();
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
  renderGameplayBoards(controller, gridCell);
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
    renderGameplayBoards(
      controller,
      humanGridContainer.querySelector(
        `[data-row="${row}"][data-col="${col}"]`,
      ),
    );
  }, 1000);
}

function showPlayAgainBtn() {
  const playAgainBtn = newPlayAgainBtn();
  optionsContainer.appendChild(playAgainBtn);
  optionsContainer.removeChild(
    optionsContainer.querySelector("#randomize-ships-btn"),
  );
  optionsContainer.removeChild(
    optionsContainer.querySelector("#start-game-btn"),
  );
  optionsContainer.style.display = "flex";

  playAgainBtn.addEventListener("click", initGameSetup);
}
