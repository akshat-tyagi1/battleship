export default class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  hit() {
    if (this.isSunk()) return;

    this.#hits++;
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
