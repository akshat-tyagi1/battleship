import Ship from './ship.js';

export default class Gameboard {
  #attacked;

  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.#attacked = Array.from({ length: 10 }, () => Array(10).fill(false));
    this.ships = [];
  }

  placeShip(row, col, length, direction) {
    if (row < 0 || col < 0) return;

    if (direction === 'horizontal' && col + length - 1 > 9) return;
    if (direction === 'vertical' && row + length - 1 > 9) return;

    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal' && this.board[row][col + i] !== null) {
        return;
      } else if (direction === 'vertical' && this.board[row + i][col] !== null)
        return;
    }

    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        this.board[row][col + i] = ship;
      } else {
        this.board[row + i][col] = ship;
      }
    }

    this.ships.push(ship);
  }

  receiveAttack(row, col) {
    if (this.#attacked[row][col]) return;

    this.#attacked[row][col] = true;

    const cell = this.board[row][col];

    if (cell instanceof Ship) {
      cell.hit();
    } else {
      this.board[row][col] = 'miss';
    }
  }

  allShipsSunk() {
    if (this.ships.length === 0) return false;

    return this.ships.every((ship) => ship.isSunk());
  }

  isAttacked(row, col) {
    return this.#attacked[row][col];
  }
}
