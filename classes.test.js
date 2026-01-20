import { Gameboard } from "/src/modules/classes.js";

const DIRECTION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};
const gameboard = new Gameboard();

test("creates ships", () => {
  expect(gameboard.ships).toEqual({
    carrier: { length: 5, hitCount: 0, sunk: false },
    battleship: { length: 4, hitCount: 0, sunk: false },
    destroyer: { length: 3, hitCount: 0, sunk: false },
    submarine: { length: 3, hitCount: 0, sunk: false },
    patrolBoat: { length: 2, hitCount: 0, sunk: false },
  });
});

test("places ship horizontally at (0,0)", () => {
  gameboard.placeShip(gameboard.ships.carrier, 0, 0, DIRECTION.HORIZONTAL);
  for (let i = 0; i < gameboard.ships.carrier.length; i++) {
    expect(gameboard.board[i][0]).toEqual(gameboard.ships.carrier);
  }
  expect(gameboard.board[0][1]).toEqual(0);
  expect(gameboard.board[6][0]).toEqual(0);
});

test("ship receives attack", () => {
  gameboard.receiveAttack(0, 0);
  expect(gameboard.ships.carrier.hitCount).toEqual(1);
});

test("gameboard reports all ships sunk", () => {
  gameboard.placeShip(gameboard.ships.battleship, 0, 1, DIRECTION.HORIZONTAL);
  gameboard.placeShip(gameboard.ships.destroyer, 0, 2, DIRECTION.HORIZONTAL);
  gameboard.placeShip(gameboard.ships.submarine, 0, 3, DIRECTION.HORIZONTAL);
  gameboard.placeShip(gameboard.ships.patrolBoat, 0, 4, DIRECTION.HORIZONTAL);

  for (let i = 1; i < gameboard.ships.carrier.length; i++) {
    gameboard.receiveAttack(i, 0);
  }

  for (let i = 0; i < gameboard.ships.battleship.length; i++) {
    gameboard.receiveAttack(i, 1);
  }

  for (let i = 0; i < gameboard.ships.destroyer.length; i++) {
    gameboard.receiveAttack(i, 2);
  }

  for (let i = 0; i < gameboard.ships.submarine.length; i++) {
    gameboard.receiveAttack(i, 3);
  }

  for (let i = 0; i < gameboard.ships.patrolBoat.length; i++) {
    gameboard.receiveAttack(i, 4);
  }

  expect(gameboard.allShipsSunk).toEqual(true);
});

const gameboardTwo = new Gameboard();

test("gameboard places all ships randomly", () => {
  gameboardTwo.placeAllShipsRandomly();
  // expect each ship to be in the array somewhere
  expect(gameboardTwo.board.flat()).toContainEqual(gameboardTwo.ships.carrier);
  expect(gameboardTwo.board.flat()).toContainEqual(
    gameboardTwo.ships.battleship
  );
  expect(gameboardTwo.board.flat()).toContainEqual(
    gameboardTwo.ships.destroyer
  );
  expect(gameboardTwo.board.flat()).toContainEqual(
    gameboardTwo.ships.submarine
  );
  expect(gameboardTwo.board.flat()).toContainEqual(
    gameboardTwo.ships.patrolBoat
  );
  // expect 83 blank spaces as exactly 17 should be occupied with ships
  expect(gameboardTwo.board.flat().filter((cell) => cell === 0)).toHaveLength(
    83
  );
});
