import { gameInitializer, playerGrid, ships, shipSelection } from '../index.js';
import renderBoard from './render/renderBoard.js';
import renderShipSelection from './render/renderShipSelection.js';

const placeShip = (function () {
  // handle the placeship page event listners

  let row, col, cell;
  let selectedCell;

  // assign coordinates to row and coll variables
  document
    .querySelector('.set-player-grid')
    .addEventListener('click', (event) => {
      if (!event.target.classList.contains('cell')) return;

      if (selectedCell) {
        selectedCell.classList.remove('selected-cell');
      }

      selectedCell = event.target;
      cell = selectedCell;

      cell.classList.add('selected-cell');

      row = Number(cell.dataset.row);
      col = Number(cell.dataset.col);
    });

  // place ship
  document.querySelector('.place-ship-button').addEventListener('click', () => {
    const shipName = document.querySelector('#ship-select').value;
    const length = document.querySelector('#ship-select').length;
    const direction = document.querySelector('#ship-direction').value;

    const player = gameInitializer.getPlayer();
    const gameboard = player.getGameboard();

    gameboard.placeShip(row, col, length, direction);

    console.log(gameboard.getCellValue(row, col));

    renderBoard(player.getGameboard(), playerGrid);
    renderBoard(player.getGameboard(), playerGrid);

    const index = ships.findIndex((ship) => ship.name === shipName);

    ships.splice(index, 1);

    renderShipSelection(ships, shipSelection);
  });
})();
