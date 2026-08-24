import Gameboard from './gameboard.js';

export default class Player {
  #gameboard;

  constructor() {
    this.#gameboard = new Gameboard();
  }

  getGameboard() {
    return this.#gameboard;
  }
}

export class ComputerPlayer extends Player {
  attack(playerGameboard) {
    let row;
    let col;

    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (playerGameboard.isAttacked(row, col));

    playerGameboard.receiveAttack(row, col);
  }
}
