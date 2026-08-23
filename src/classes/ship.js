export default class Ship {
  #length;
  #hits;
  #name;

  constructor(length, name) {
    this.#name = name;
    this.#length = length;
    this.#hits = 0;
  }

  hit() {
    if (this.isSunk()) return;

    this.#hits++;
  }

  getName() {
    return this.#name;
  }

  getHits() {
    return this.#hits;
  }

  getLength() {
    return this.#length;
  }

  isSunk() {
    return this.#hits === this.#length;
  }
}
