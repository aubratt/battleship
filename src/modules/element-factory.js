export function newRowLabelContainer() {
  const container = document.createElement("div");
  container.classList.add("row-label-container");
  return container;
}

export function newColLabelContainer() {
  const container = document.createElement("div");
  container.classList.add("col-label-container");
  return container;
}

export function newRowLabelChar() {
  const char = document.createElement("p");
  char.classList.add("row-label-char");
  return char;
}

export function newColLabelChar() {
  const char = document.createElement("p");
  char.classList.add("col-label-char");
  return char;
}

export function newGridContainer() {
  const container = document.createElement("div");
  container.classList.add("grid-container");
  return container;
}

export function newGridCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}

export function newOptionsContainer() {
  const container = document.createElement("div");
  container.id = "options-container";
  return container;
}

export function newRandomizeShipsBtn() {
  const btn = document.createElement("button");
  btn.id = "randomize-ships-btn";
  btn.classList.add("btn");
  btn.textContent = "Randomize";
  return btn;
}

export function newStartGameBtn() {
  const btn = document.createElement("button");
  btn.id = "start-game-btn";
  btn.classList.add("btn");
  btn.textContent = "Start Game";
  return btn;
}

export function newPlayAgainBtn() {
  const btn = document.createElement("button");
  btn.id = "play-again-btn";
  btn.classList.add("btn");
  btn.textContent = "Play Again";
  return btn;
}

export function newGameLogContainer() {
  const container = document.createElement("div");
  container.id = "game-log-container";
  return container;
}

export function newGameLogHeading() {
  const heading = document.createElement("h2");
  heading.id = "game-log-heading";
  heading.textContent = "Game Log";
  return heading;
}

export function newTurnContainer() {
  const container = document.createElement("div");
  container.classList.add("turn-container");
  return container;
}

export function newTurnNumberHeading() {
  const heading = document.createElement("p");
  heading.classList.add("turn-number-heading");
  return heading;
}

export function newMoveContainer() {
  const container = document.createElement("div");
  container.classList.add("move-container");
  return container;
}

export function newMoveText() {
  const text = document.createElement("p");
  text.classList.add("move-text");
  return text;
}