import { gameInitializer, playerGrid, shipSelection } from '../index.js';
import renderBoard from './render/renderBoard.js';
import renderShipSelection from './render/renderShipSelection.js';
import showPlacementError from '../error.js';
import handlePlacementSuccess from './handlePlacementSuccess.js';

const initPLacementListeners = (function () {
  // handle the placeship page event listners

  const selectionState = { row: undefined, col: undefined, cell: undefined };

  // assign coordinates to row and coll variables
  document
    .querySelector('.set-player-grid')
    .addEventListener('click', (event) => {
      if (!event.target.classList.contains('cell')) return;

      if (selectionState.cell) {
        selectionState.cell.classList.remove('selected-cell');
      }

      selectionState.cell = event.target;
      selectionState.cell.classList.add('selected-cell');

      selectionState.row = Number(selectionState.cell.dataset.row);
      selectionState.col = Number(selectionState.cell.dataset.col);
    });

  // place ship
  document.querySelector('.place-ship-button').addEventListener('click', () => {
    if (selectionState.row === undefined || selectionState.col === undefined)
      return;

    const select = document.querySelector('#ship-select');

    const shipName = document.querySelector('#ship-select').value;
    const length = Number(select.selectedOptions[0].dataset.length);
    const direction = document.querySelector('#ship-direction').value;

    const player = gameInitializer.getPlayer();
    const gameboard = player.getGameboard();

    const errorMessage = gameboard.canPlaceShip(
      selectionState.row,
      selectionState.col,
      length,
      direction,
      shipName,
    );

    showPlacementError(
      errorMessage,
      document.querySelector('.placement-error'),
    );

    if (errorMessage) return;

    gameboard.placeShip(
      selectionState.row,
      selectionState.col,
      length,
      direction,
      shipName,
    );

    handlePlacementSuccess(
      gameInitializer,
      gameboard,
      playerGrid,
      shipSelection,
      shipName,
      selectionState,
    );
  });
})();
