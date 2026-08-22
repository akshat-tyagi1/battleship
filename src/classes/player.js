import Gameboard from './gameboard.js';

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  getGameboard() {
    return this.gameboard;
  }
}

export class ComputerPlayer extends Player {
  attack(oppenentGameboard) {
    let row;
    let col;

    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (oppenentGameboard.isAttacked(row, col));

    oppenentGameboard.receiveAttack(row, col);
  }
}
