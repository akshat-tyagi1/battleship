export default function renderBoard(gameBoard, domElement) {
  domElement.innerHTML = '';

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const button = document.createElement('button');

      const cellValue = gameBoard.getCellValue(row, col);

      button.classList.add('cell');

      if (typeof cellValue === 'string') {
        button.classList.add(cellValue);
      } else {
        button.classList.add('ship');
      }

      button.dataset.row = row;
      button.dataset.col = col;

      domElement.appendChild(button);
    }
  }
}
