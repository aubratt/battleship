import { DIRECTION, Player, getRandomInteger } from "./classes";
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
  newGameLogContainer,
  newGameLogHeading,
  newTurnNumberHeading,
  newMoveContainer,
  newMoveText,
  newTurnContainer,
} from "./element-factory";

const CAPITAL_A_INDEX = 65;

const gameStatus = document.getElementById("game-status");
const gameContainer = document.getElementById("game-container");
let humanGridContainer;
let optionsContainer;
let cpuGridContainer;
let gameLogContainer;
let gameLogHeading;

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

  if (!optionsContainer) optionsContainer = newOptionsContainer();
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
  // optionsContainer.style.display = "none";
  optionsContainer.remove();

  gameLogContainer = newGameLogContainer();
  gameLogHeading = newGameLogHeading();
  document.body.appendChild(gameLogContainer);
  gameLogContainer.appendChild(gameLogHeading);

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

  if (humanTurn) {
    gameStatus.textContent = "Your turn";
  } else {
    gameStatus.textContent = "CPU's turn";
  }

  if (boardCell.ship) {
    gridCell.classList.add(boardCell.ship.name, "hit");
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

function renderGameLog(controller, row, col) {
  const humanTurn = controller.currentTurn === controller.humanPlayer;

  if (!humanTurn) {
    const turnContainer = newTurnContainer();
    const turnNumberHeading = newTurnNumberHeading();

    turnContainer.setAttribute("data-turn-number", controller.turnNumber);
    turnNumberHeading.textContent = `Turn ${controller.turnNumber}`;

    turnContainer.appendChild(turnNumberHeading);

    if (controller.turnNumber > 1)
      gameLogContainer.insertBefore(
        turnContainer,
        gameLogContainer.querySelector(
          `[data-turn-number="${controller.turnNumber - 1}"]`,
        ),
      );
    else gameLogContainer.appendChild(turnContainer);
  }

  const turnContainer = gameLogContainer.querySelector(
    `[data-turn-number="${controller.turnNumber}"]`,
  );
  const moveContainer = newMoveContainer();
  const moveText = newMoveText();

  moveContainer.setAttribute("data-turn-number", controller.turnNumber);
  moveContainer.setAttribute("data-move-number", humanTurn ? 2 : 1);

  const player = humanTurn ? "CPU" : "You";
  const enemy = humanTurn ? "your" : "CPU's";
  const boardCell = humanTurn
    ? controller.humanPlayer.gameboard.board[row][col]
    : controller.cpuPlayer.gameboard.board[row][col];
  const ship = boardCell.ship ? boardCell.ship.name : null;
  const rowLetter = String.fromCharCode(CAPITAL_A_INDEX + Number(row));
  const cell = rowLetter + (Number(col) + 1);

  if (boardCell.ship) {
    if (boardCell.ship.sunk) {
      moveContainer.classList.add("move-sunk");
      moveText.textContent = `${player} sunk ${enemy} ${ship} at ${cell}`;
    } else {
      moveContainer.classList.add("move-hit");
      moveText.textContent = `${player} hit ${enemy} ${ship} at ${cell}`;
    }
  } else {
    moveContainer.classList.add("move-miss");
    moveText.textContent = `${player} missed at ${cell}`;
  }

  moveContainer.appendChild(moveText);

  if (moveContainer.dataset.moveNumber > 1)
    turnContainer.insertBefore(
      moveContainer,
      turnContainer.querySelector(`[data-move-number="1"]`),
    );
  else turnContainer.appendChild(moveContainer);
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
  renderGameLog(controller, gridCell.dataset.row, gridCell.dataset.col);
}

function handleCpuTurn(controller) {
  if (controller.gameOver) return;

  setTimeout(() => {
    let row = -1;
    let col = -1;
    let result = controller.processMove(controller.humanPlayer, row, col);

    while (!result.valid) {
      let shipHitCells = controller.humanPlayer.gameboard.board
        .flat()
        .filter((cell) => cell.ship && cell.hit && !cell.ship.sunk);

      if (shipHitCells.length > 0) {
        let targetShip = null;
        for (const [key, ship] of Object.entries(
          controller.humanPlayer.gameboard.ships,
        )) {
          if (ship.hitCount > 1 && !ship.sunk) {
            targetShip = ship;
            break;
          }
        }

        let targetCell;
        let hitHorizontalAdjacent;

        if (targetShip) {
          shipHitCells = shipHitCells.filter(
            (cell) => cell.ship.name === targetShip.name,
          );
        } else {
          hitHorizontalAdjacent = getRandomInteger(2) < 2 ? true : false;
        }

        targetCell = shipHitCells[getRandomInteger(shipHitCells.length - 1)];

        if (
          targetCell.ship.direction === DIRECTION.HORIZONTAL ||
          hitHorizontalAdjacent
        ) {
          row = targetCell.row;
          col =
            getRandomInteger(2) < 2 ? targetCell.col - 1 : targetCell.col + 1;
        } else {
          row =
            getRandomInteger(2) < 2 ? targetCell.row - 1 : targetCell.row + 1;
          col = targetCell.col;
        }
      } else {
        row = getRandomInteger(9);
        col = getRandomInteger(9);
      }

      result = controller.processMove(controller.humanPlayer, row, col);
    }

    controller.nextTurn();
    renderGameplayBoards(
      controller,
      humanGridContainer.querySelector(
        `[data-row="${row}"][data-col="${col}"]`,
      ),
    );

    renderGameLog(controller, row, col);
  }, 1000);
}

function showPlayAgainBtn() {
  const playAgainBtn = newPlayAgainBtn();
  optionsContainer = newOptionsContainer();

  optionsContainer.style.display = "flex";

  optionsContainer.appendChild(playAgainBtn);
  gameContainer.appendChild(optionsContainer);

  playAgainBtn.addEventListener("click", () => {
    gameLogContainer.remove();
    playAgainBtn.remove();
    initGameSetup();
  });
}
