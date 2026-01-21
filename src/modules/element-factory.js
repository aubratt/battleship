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

export function newGridSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  return square;
}
