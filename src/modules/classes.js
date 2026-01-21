const DIRECTION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

export class Ship {
  constructor(name, length) {
    this.name = name;
    this.direction;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitCount++;
    this.isSunk();
  }

  isSunk() {
    if (this.hitCount >= this.length) this.sunk = true;
  }
}

export class Gameboard {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.board = this.createBoard();
    this.ships = this.createShips();
    this.allShipsSunk = false;
  }

  createBoard() {
    let board = [];

    for (let i = 0; i < this.width; i++) {
      board[i] = [];
      for (let j = 0; j < this.height; j++) {
        board[i][j] = 0;
      }
    }

    return board;
  }

  createShips() {
    const carrier = new Ship("carrier", 5);
    const battleship = new Ship("battleship", 4);
    const destroyer = new Ship("destroyer", 3);
    const submarine = new Ship("submarine", 3);
    const patrolBoat = new Ship("patrol-boat", 2);

    return {
      carrier: carrier,
      battleship: battleship,
      destroyer: destroyer,
      submarine: submarine,
      patrolBoat: patrolBoat,
    };
  }

  placeShip(ship, x, y) {
    if (ship.direction === DIRECTION.HORIZONTAL) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y] = ship;
        x++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y] = ship;
        y++;
      }
    }
  }

  placeAllShipsRandomly() {
    for (const [key, ship] of Object.entries(this.ships)) {
      ship.direction =
        getRandomInteger(1) < 1 ? DIRECTION.HORIZONTAL : DIRECTION.VERTICAL;

      let xMax;
      let yMax;
      let xRandom;
      let yRandom;

      if (ship.direction === DIRECTION.HORIZONTAL) {
        xMax = this.width - ship.length;
        yMax = this.height - 1;
        xRandom = -1;

        while (xRandom === -1) {
          xRandom = getRandomInteger(xMax);
          yRandom = getRandomInteger(yMax);

          for (let i = xRandom; i < xRandom + ship.length; i++) {
            if (this.board[i][yRandom] !== 0) xRandom = -1;
            if (xRandom === -1) break;
          }
        }
      } else {
        xMax = this.width - 1;
        yMax = this.height - ship.length;
        yRandom = -1;

        while (yRandom === -1) {
          xRandom = getRandomInteger(xMax);
          yRandom = getRandomInteger(yMax);

          for (let i = yRandom; i < yRandom + ship.length; i++) {
            if (this.board[xRandom][i] !== 0) yRandom = -1;
            if (yRandom === -1) break;
          }
        }
      }
      this.placeShip(ship, xRandom, yRandom);
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === 0) this.board[x][y] = 1;
    else if (this.board[x][y] !== 1) {
      this.board[x][y].hit();
      this.checkIfAllShipsSunk();
    }
  }

  checkIfAllShipsSunk() {
    for (const [key, ship] of Object.entries(this.ships)) {
      if (ship.sunk === false) return;
    }
    this.allShipsSunk = true;
  }
}

export class Player {
  constructor(human) {
    this.human = human;
    this.gameboard = new Gameboard();
  }
}

export function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
