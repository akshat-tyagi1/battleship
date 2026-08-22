import Ship from '../src/Classes/ship.js';

test('Ship has 0 hits initially', () => {
  const ship = new Ship(2);
  expect(ship.getHits()).toBe(0);
});

test('Hits increase on calling hit', () => {
  const ship = new Ship(2);

  ship.hit();

  expect(ship.getHits()).toBe(1);
});

test('Is ship sunk 1.0', () => {
  const ship = new Ship(2);

  ship.hit();

  expect(ship.isSunk()).toBe(false);
});

test('Is ship sunk 2.0', () => {
  const ship = new Ship(2);

  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

test("hit count can't exceed ship length.", () => {
  const ship = new Ship(2);

  ship.hit();
  ship.hit();

  const hits = ship.getHits();

  ship.hit();

  expect(ship.getHits()).toBe(hits);
});
