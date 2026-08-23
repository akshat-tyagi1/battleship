import GameInitializer from './gameInitializer.js';
import renderBoard from './DOM/render/renderBoard.js';
import renderShipSelection from './DOM/render/renderShipSelection.js';
import './DOM/domController.js';

const gameInitializer = new GameInitializer();
const playerGrid = document.querySelector('.set-player-grid');
const shipSelection = document.querySelector('#ship-select');

renderBoard(gameInitializer.getPlayer().getGameboard(), playerGrid);

renderShipSelection(gameInitializer.getShips(), shipSelection);

export { gameInitializer, playerGrid, shipSelection };
