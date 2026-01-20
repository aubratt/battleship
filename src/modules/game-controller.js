import { Player } from "./classes";
import { buildHumanShips, buildCpuShips, buildGameboard } from "./page-builder";

let humanPlayer = new Player(true);
let cpuPlayer = new Player(false);

buildGameboard(humanPlayer);
buildGameboard(cpuPlayer);

humanPlayer.gameboard.placeAllShipsRandomly();
cpuPlayer.gameboard.placeAllShipsRandomly();

buildHumanShips(humanPlayer);
buildCpuShips(cpuPlayer);
