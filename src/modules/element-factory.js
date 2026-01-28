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
