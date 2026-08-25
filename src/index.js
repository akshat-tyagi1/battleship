import GameInitializer from './gameInitializer.js';
import renderBoard from './DOM/render/renderBoard.js';
import renderShipSelection from './DOM/render/renderShipSelection.js';
import './DOM/attackController.js';
import './DOM/placementController.js';
import './styles.css';

const gameInitializer = new GameInitializer();
const playerGrid = document.querySelector('.set-player-grid');
const shipSelection = document.querySelector('#ship-select');

renderBoard(gameInitializer.getPlayer().getGameboard(), playerGrid, true);

renderShipSelection(gameInitializer.getShips(), shipSelection);

export { gameInitializer, playerGrid, shipSelection };
