import { Player } from "./classes";
import { buildGameboard, buildShips } from "./page-builder";

let humanPlayer = new Player(true);
let cpuPlayer = new Player(false);

buildGameboard(humanPlayer);
buildGameboard(cpuPlayer);

humanPlayer.gameboard.placeAllShipsRandomly();
cpuPlayer.gameboard.placeAllShipsRandomly();

buildShips(humanPlayer);
