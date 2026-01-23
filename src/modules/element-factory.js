export function newTurnIndicator() {
  const indicator = document.createElement("h3");
  indicator.classList.add("turn-indicator");
  return indicator;
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
