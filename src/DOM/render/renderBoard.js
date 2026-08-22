export default function renderBoard(board, domElement) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const button = document.createElement('button');
      button.classList.add('cell', board.getCellValue(row, col));
      button.dataset.row = row;
      button.dataset.col = col;

      domElement.appendChild(button);
    }
  }
}
