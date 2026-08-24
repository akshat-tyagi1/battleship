import Player from './classes/player.js';
import { ComputerPlayer } from './classes/player.js';

export default class GameInitializer {
  #player;
  #computer;
  #shipsTypes;

  constructor() {
    this.#player = new Player();
    this.#computer = new ComputerPlayer();
    this.#shipsTypes = [
      { name: 'carrier', length: 5 },
      { name: 'battleship', length: 4 },
      { name: 'destroyer', length: 3 },
      { name: 'submarine', length: 3 },
      { name: 'patrol boat', length: 2 },
    ];
  }

  getPlayer() {
    return this.#player;
  }

  getComputer() {
    return this.#computer;
  }

  getShips() {
    return [...this.#shipsTypes];
  }
}
