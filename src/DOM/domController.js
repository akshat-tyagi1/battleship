import { gameInitializer, playerGrid, shipSelection } from '../index.js';
import showPlacementError from '../helperFunctions/error.js';
import handlePlacementSuccess from '../helperFunctions/handlePlacementSuccess.js';
import renderBoard from './render/renderBoard.js';
import placeComputerShip from '../helperFunctions/placeComputerShip.js';

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

    // check for ship placement, return null if its placable else return error.
    const errorMessage = gameboard.canPlaceShip(
      selectionState.row,
      selectionState.col,
      length,
      direction,
      shipName,
    );

    // show placement error on dom
    showPlacementError(
      errorMessage,
      document.querySelector('.placement-error'),
    );

    // return if error is returned from canPlace Ship function
    if (errorMessage) return;

    // place ship on the board
    gameboard.placeShip(
      selectionState.row,
      selectionState.col,
      length,
      direction,
      shipName,
    );

    // update the dome after successfully placing the ship.
    handlePlacementSuccess(
      gameInitializer,
      gameboard,
      playerGrid,
      shipSelection,
      player,
      selectionState,
    );
  });

  // play button eventlistner

  document.querySelector('.play-button').addEventListener('click', () => {
    // check if user placed all the ships.
    const select = document.querySelector('#ship-select');
    if (select.hasChildNodes()) return;

    document.querySelector('.place-your-ship').classList.add('hidden');
    document.querySelector('.main-container').classList.remove('hidden');

    // place opponent ships
    const ships = gameInitializer.getShips();
    for (let i = 0; i < ships.length; i++) {
      placeComputerShip(gameInitializer.getComputer().getGameboard(), ships[i]);
    }

    renderBoard(
      gameInitializer.getPlayer().getGameboard(),
      document.querySelector('.player-grid'),
      true,
    );

    renderBoard(
      gameInitializer.getComputer().getGameboard(),
      document.querySelector('.opponent-grid'),
      false,
    );
  });
})();
