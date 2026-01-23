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

    for (let row = 0; row < this.width; row++) {
      board[row] = [];
      for (let col = 0; col < this.height; col++) {
        board[row][col] = {
          ship: null,
          hit: false,
        };
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

  placeShip(ship, row, col) {
    if (ship.direction === DIRECTION.HORIZONTAL) {
      for (let i = 0; i < ship.length; i++) {
        this.board[row][col].ship = ship;
        col++;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[row][col].ship = ship;
        row++;
      }
    }
  }

  placeAllShipsRandomly() {
    for (const [key, ship] of Object.entries(this.ships)) {
      ship.direction =
        getRandomInteger(1) < 1 ? DIRECTION.HORIZONTAL : DIRECTION.VERTICAL;

      let rowMax;
      let colMax;
      let rowRandom;
      let colRandom;

      if (ship.direction === DIRECTION.HORIZONTAL) {
        rowMax = this.height - 1;
        colMax = this.width - ship.length;
        colRandom = -1;

        while (colRandom === -1) {
          rowRandom = getRandomInteger(rowMax);
          colRandom = getRandomInteger(colMax);

          for (let i = colRandom; i < colRandom + ship.length; i++) {
            if (this.board[rowRandom][i].ship) colRandom = -1;
            if (colRandom === -1) break;
          }
        }
      } else {
        rowMax = this.height - ship.length;
        colMax = this.width - 1;
        rowRandom = -1;

        while (rowRandom === -1) {
          rowRandom = getRandomInteger(rowMax);
          colRandom = getRandomInteger(colMax);

          for (let i = rowRandom; i < rowRandom + ship.length; i++) {
            if (this.board[i][colRandom].ship) rowRandom = -1;
            if (rowRandom === -1) break;
          }
        }
      }
      this.placeShip(ship, rowRandom, colRandom);
    }
  }

  receiveAttack(row, col) {
    const cell = this.board[row][col];

    if (cell.hit) return { valid: false };

    cell.hit = true;

    if (cell.ship) {
      cell.ship.hit();
      this.checkIfAllShipsSunk();
      return { valid: true, hit: true };
    }
    return { valid: true, hit: false };
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
