export default function renderBoard(gameBoard, domElement, revealShips) {
  domElement.innerHTML = '';

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const button = document.createElement('button');

      const cellValue = gameBoard.getCellValue(row, col);

      button.classList.add('cell');

      if (typeof cellValue === 'string') {
        button.classList.add(cellValue);
      } else if (revealShips) {
        button.classList.add('ship');
      } else {
        button.classList.add('unattacked')
      }

      button.dataset.row = row;
      button.dataset.col = col;

      domElement.appendChild(button);
    }
  }
}
