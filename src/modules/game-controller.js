import { Player } from "./classes";
import { displayHumanGameboard } from "./page-builder";

export function startNewGame() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  displayHumanGameboard(humanPlayer);
}

startNewGame();
