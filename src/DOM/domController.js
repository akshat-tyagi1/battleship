import { gameInitializer, playerGrid, shipSelection } from '../index.js';
import renderBoard from './render/renderBoard.js';
import renderShipSelection from './render/renderShipSelection.js';

const initPLacementListeners = (function () {
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
    if (row === undefined || col === undefined) return;

    const select = document.querySelector('#ship-select');

    const shipName = document.querySelector('#ship-select').value;
    const length = Number(select.selectedOptions[0].dataset.length);
    const direction = document.querySelector('#ship-direction').value;

    const player = gameInitializer.getPlayer();
    const gameboard = player.getGameboard();

    gameboard.placeShip(row, col, length, direction);

    renderBoard(player.getGameboard(), playerGrid);

    row = undefined;
    col = undefined;
    selectedCell = undefined;

    const index = gameInitializer
      .getShips()
      .findIndex((ship) => ship.name === shipName);

    gameInitializer.removeShip(index);

    renderShipSelection(gameInitializer.getShips(), shipSelection);
  });
})();
