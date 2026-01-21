import { Player } from "./classes";
import {
  displayCpuGameboard,
  displayHumanGameboard,
  handleHumanTurn,
} from "./page-builder";

export function startNewGame() {
  const humanPlayer = new Player(true);
  const cpuPlayer = new Player(false);

  humanPlayer.gameboard.placeAllShipsRandomly();
  cpuPlayer.gameboard.placeAllShipsRandomly();

  displayHumanGameboard(humanPlayer);
  displayCpuGameboard(cpuPlayer);

  handleHumanTurn(humanPlayer, cpuPlayer);
}

startNewGame();
