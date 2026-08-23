import Player from './Classes/player.js';
import { ComputerPlayer } from './Classes/player.js';

export default class GameInitializer {
  constructor() {
    this.player = new Player();
    this.computer = new ComputerPlayer();
  }

  getPlayer() {
    return this.player;
  }

  getComputer() {
    return this.computer;
  }
}
