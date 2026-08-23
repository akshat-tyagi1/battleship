import GameInitializer from './gameInitializer.js';
import renderBoard from './DOM/render/renderBoard.js';
import renderShipSelection from './DOM/render/renderShipSelection.js';
import './DOM/domController.js';

const gameInitializer = new GameInitializer();
const playerGrid = document.querySelector('.set-player-grid');
const shipSelection = document.querySelector('#ship-select');

const ships = [
  { name: 'carrier', length: 5 },
  { name: 'battleship', length: 4 },
  { name: 'destroyer', length: 3 },
  { name: 'submarine', length: 3 },
  { name: 'patrol boat', length: 2 },
];

renderBoard(gameInitializer.getPlayer().getGameboard(), playerGrid);

renderShipSelection(ships, shipSelection);

export { gameInitializer, ships, playerGrid, shipSelection };
