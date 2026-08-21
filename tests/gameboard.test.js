import Gameboard from '../src/gameboard.js';
import Ship from '../src/ship.js';

test('places a ship horizontally within bounds', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, 'horizontal');

  expect(gameboard.ships.length).toBe(1);
  expect(gameboard.board[0][0]).toBeInstanceOf(Ship);
  expect(gameboard.board[0][1]).toBeInstanceOf(Ship);
  expect(gameboard.board[0][2]).toBeInstanceOf(Ship);
});

test('places a ship vertically within bounds', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, 'vertical');

  expect(gameboard.board[0][0]).toBeInstanceOf(Ship);
  expect(gameboard.board[1][0]).toBeInstanceOf(Ship);
  expect(gameboard.board[2][0]).toBeInstanceOf(Ship);
});

test('does not place a ship that goes out of bounds horizontally', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 8, 3, 'horizontal');

  expect(gameboard.ships.length).toBe(0);
});

test('does not place a ship that goes out of bounds vertically', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(8, 0, 3, 'vertical');

  expect(gameboard.ships.length).toBe(0);
});

test('does not place a ship overlapping an existing ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, 'horizontal');
  gameboard.placeShip(0, 1, 3, 'vertical'); // overlaps at (0,1)

  expect(gameboard.ships.length).toBe(1);
});

test('receiveAttack registers a hit on a ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, 'horizontal');

  gameboard.receiveAttack(0, 0);

  expect(gameboard.ships[0].getHits()).toBe(1);
});

test('receiveAttack records a miss on an empty cell', () => {
  const gameboard = new Gameboard();

  gameboard.receiveAttack(5, 5);

  expect(gameboard.board[5][5]).toBe('miss');
});

test('receiveAttack does not register a second hit on an already-attacked ship cell', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, 'horizontal');

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 0);

  expect(gameboard.ships[0].getHits()).toBe(1);
});

test('receiveAttack does not overwrite an already-missed cell', () => {
  const gameboard = new Gameboard();

  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(5, 5);

  expect(gameboard.isAttacked(5,5)).toBe(true);
  expect(gameboard.board[5][5]).toBe('miss');
});

test('allShipsSunk returns false when a ship is still afloat', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 1, 'horizontal');

  expect(gameboard.allShipsSunk()).toBe(false);
});

test('allShipsSunk returns true once all ships are sunk', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 1, 'horizontal');

  gameboard.receiveAttack(0, 0);

  expect(gameboard.allShipsSunk()).toBe(true);
});

test('allShipsSunk returns false when no ships have been placed', () => {
  const gameboard = new Gameboard();

  expect(gameboard.allShipsSunk()).toBe(false);
});

test('does not place a ship that have negative coordinates', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, -8, 3, 'horizontal');

  expect(gameboard.ships.length).toBe(0);
});