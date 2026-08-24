import Ship from './ship.js';

export default class Gameboard {
  #board;
  #attacked;
  #placedShips;

  constructor() {
    this.#board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.#attacked = Array.from({ length: 10 }, () => Array(10).fill(false));
    this.#placedShips = [];
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

    this.#placedShips.push(ship);
  }

  canPlaceShip(row, col, length, direction, shipName) {
    if (this.#placedShips.some((ship) => ship.getName() === shipName)) {
      return 'This ship has already placed.';
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
        (direction === 'horizontal' && this.#board[row][col + i] !== null) ||
        (direction === 'vertical' && this.#board[row + i][col] !== null)
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
    }
  }
  
  isShip(row, col) {
    return this.#board[row][col] instanceof Ship;
  }
  allShipsSunk() {
    if (this.#placedShips.length === 0) return false;

    return this.#placedShips.every((ship) => ship.isSunk());
  }

  isAttacked(row, col) {
    return this.#attacked[row][col];
  }

  getBoard() {
    return this.#board.map((row) => [...row]);
  }


  getCellState(row, col) {
    if (!this.#attacked[(row, col)]) {
      return 'unattacked';
    } else if (this.#board[row][col] instanceof Ship) {
      return 'hit';
    } else {
      return 'miss';
    }
  }

  getPlacedShips() {
    return [...this.#placedShips];
  }
}
