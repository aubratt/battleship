export class Controller {
  constructor(humanPlayer, cpuPlayer) {
    this.humanPlayer = humanPlayer;
    this.cpuPlayer = cpuPlayer;
    this.currentTurn = humanPlayer;
    this.turnNumber = 1;
    this.gameOver = false;
    this.winner = null;
  }

  processMove(enemy, row, col) {
    return enemy.gameboard.receiveAttack(row, col);
  }

  nextTurn() {
    const humanWin = this.cpuPlayer.gameboard.allShipsSunk;
    const cpuWin = this.humanPlayer.gameboard.allShipsSunk;

    if (humanWin || cpuWin) {
      this.gameOver = true;
      humanWin
        ? (this.winner = this.humanPlayer)
        : (this.winner = this.cpuPlayer);
    }

    if (this.currentTurn === this.humanPlayer)
      this.currentTurn = this.cpuPlayer;
    else {
      this.currentTurn = this.humanPlayer;
      this.turnNumber++;
    }
  }
}
