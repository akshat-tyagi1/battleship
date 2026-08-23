import initApp from '..';

const placeShip = (function () {
  // handle the placeship page event listners

  let row, col;

  // assign coordinates to row and coll variables
  document
    .querySelector('.set-player-grid')
    .addEventListener('click', (event) => {
      if (!event.target.classList.contains('cell')) return;

      const cell = event.target;
      row = cell.dataset.row;
      col = cell.dataset.col;
    });

  // place ship
  document.querySelector('.place-ship-button').addEventListener('click', () => {
    const ship = document.querySelector('#select-ship').value;
    const length = document.querySelector('#select-ship').length;
    const direction = document.querySelector('#ship-direction').value;

    const player = initApp.getPlayer();
    const gameboard = player.getGameboard();
    
    gameboard.placeShip(row, col, length, direction);
  });
})();
