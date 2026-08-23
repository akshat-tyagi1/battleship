import Ship from './ship.js';

export default class Gameboard {
  #board;
  #attacked;

  constructor() {
    this.#board = Array.from({ length: 10 }, () =>
      Array(10).fill('unattacked'),
    );
    this.#attacked = Array.from({ length: 10 }, () => Array(10).fill(false));
    this.ships = [];
  }

  placeShip(row, col, length, direction, shipName) {
    const ship = new Ship(length, shipName);

    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        this.#board[row][col + i] = ship;
      } else {
        this.#board[row + i][col] = ship;
      }
    }

    this.ships.push(ship);
  }

  canPlaceShip(row, col, length, direction, shipName) {
    if(this.ships.some(ship => ship.getName() === shipName)) {
      return "This ship has already placed."
    }

    if (row < 0 || col < 0) {
      return 'Invalid coordinates.';
    }

    if (
      (direction === 'horizontal' && col + length - 1 > 9) ||
      (direction === 'vertical' && row + length - 1 > 9)
    ) {
      return "Ship doesn't fit on the board.";
    }

    for (let i = 0; i < length; i++) {
      if (
        (direction === 'horizontal' &&
          this.#board[row][col + i] !== 'unattacked') ||
        (direction === 'vertical' && this.#board[row + i][col] !== 'unattacked')
      ) {
        return 'Ship overlaps another ship.';
      }
    }

    return null;
  }

  receiveAttack(row, col) {
    if (this.#attacked[row][col]) return;

    this.#attacked[row][col] = true;

    const cell = this.#board[row][col];

    if (cell instanceof Ship) {
      cell.hit();
      this.#board[row][col] = 'hit';
    } else {
      this.#board[row][col] = 'miss';
    }
  }

  allShipsSunk() {
    if (this.ships.length === 0) return false;

    return this.ships.every((ship) => ship.isSunk());
  }

  isAttacked(row, col) {
    return this.#attacked[row][col];
  }

  getBoard() {
    return this.#board.map((row) => [...row]);
  }

  getCellValue(row, col) {
    return this.#board[row][col];
  }
}
