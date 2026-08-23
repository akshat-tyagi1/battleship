import renderBoard from './render/renderBoard.js';
import renderShipSelection from './render/renderShipSelection.js';

export default function handlePlacementSuccess(
  gameInitializer,
  gameboard,
  playerGrid,
  shipSelection,
  shipName,
  selectionState,
) {
  renderBoard(gameboard, playerGrid);

  const index = gameInitializer
    .getShips()
    .findIndex((ship) => ship.name === shipName);
  gameInitializer.removeShip(index);

  renderShipSelection(gameInitializer.getShips(), shipSelection);

  selectionState.row = undefined;
  selectionState.col = undefined;
  selectionState.cell = undefined;
}
