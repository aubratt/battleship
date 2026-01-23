import { Player } from "./classes";
import { displayGameboard, handleHumanTurn } from "./page-builder";

export function startNewGame() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  displayGameboard(humanPlayer);
  displayGameboard(cpuPlayer);

  handleHumanTurn(humanPlayer, cpuPlayer);
}

startNewGame();
