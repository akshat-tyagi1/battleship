export default function renderBoard(gameBoard, domElement, revealShips) {
  domElement.innerHTML = '';

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const button = document.createElement('button');

      const cellState = gameBoard.getCellState(row, col);

      button.classList.add('cell', cellState);

      if (revealShips && gameBoard.isShip(row, col)) {
        button.classList.add('ship');
      }

      button.dataset.row = row;
      button.dataset.col = col;

      domElement.appendChild(button);
    }
  }
}
