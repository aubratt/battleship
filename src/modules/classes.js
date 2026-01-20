const DIRECTION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

// Carrier: 5
// Battleship: 4
// Destroyer: 3
// Submarine: 3
// Patrol Boat: 2

// Board Size: 10 x 10

export class Ship {
  constructor(length, hitCount, sunk) {
    this.length = length;
    this.hitCount = hitCount;
    this.sunk = sunk;
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
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
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
    const carrier = new Ship(5, 0, false);
    const battleship = new Ship(4, 0, false);
    const destroyer = new Ship(3, 0, false);
    const submarine = new Ship(3, 0, false);
    const patrolBoat = new Ship(2, 0, false);

    return {
      carrier: carrier,
      battleship: battleship,
      destroyer: destroyer,
      submarine: submarine,
      patrolBoat: patrolBoat,
    };
  }

  placeShip([shipName, ship], x, y, direction) {
    if (direction === DIRECTION.HORIZONTAL) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y] = [shipName, ship];
        x++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y] = [shipName, ship];
        y++;
      }
    }
  }

  placeAllShipsRandomly() {
    for (const [key, value] of Object.entries(this.ships)) {
      // randomly determine ship direction
      const randomDir =
        getRandomInteger(1) < 1 ? DIRECTION.HORIZONTAL : DIRECTION.VERTICAL;

      let xMax;
      let yMax;
      let xRandom;
      let yRandom;

      if (randomDir === DIRECTION.HORIZONTAL) {
        xMax = this.width - value.length;
        yMax = this.height - 1;
        xRandom = -1;

        while (xRandom === -1) {
          xRandom = getRandomInteger(xMax);
          yRandom = getRandomInteger(yMax);

          for (let i = xRandom; i < xRandom + value.length; i++) {
            if (this.board[i][yRandom] !== 0) xRandom = -1;
            if (xRandom === -1) break;
          }
        }
      } else {
        xMax = this.width - 1;
        yMax = this.height - value.length;
        yRandom = -1;

        while (yRandom === -1) {
          xRandom = getRandomInteger(xMax);
          yRandom = getRandomInteger(yMax);

          for (let i = yRandom; i < yRandom + value.length; i++) {
            if (this.board[xRandom][i] !== 0) yRandom = -1;
            if (yRandom === -1) break;
          }
        }
      }
      this.placeShip([key, value], xRandom, yRandom, randomDir);
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
    for (const [key, value] of Object.entries(this.ships)) {
      if (value.sunk === false) return;
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

function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
