export default function placeComputerShip(computerGameboard, ship) {
  const directions = ['horizontal', 'vertical'];

  let isValid, row, col, direction;

  while (isValid !== null) {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
    direction = directions[Math.floor(Math.random() * directions.length)];

    isValid = computerGameboard.canPlaceShip(
      row,
      col,
      ship.length,
      direction,
      ship.name,
    );
  }

  computerGameboard.placeShip(row, col, ship.length, direction, ship.name);
}
