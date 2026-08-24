import renderBoard from '../DOM/render/renderBoard.js';
import renderShipSelection from '../DOM/render/renderShipSelection.js';

export default function handlePlacementSuccess(
  gameInitializer,
  gameboard,
  playerGrid,
  shipSelection,
  player,
  selectionState,
) {
  renderBoard(gameboard, playerGrid, true);

  const availableShips = gameInitializer.getShips().filter(
    (shipType) =>
      !player.getGameboard().getPlacedShips().some(
        (placedShip) => placedShip.getName() === shipType.name,
      ),
  );

  renderShipSelection(availableShips, shipSelection);

  selectionState.row = undefined;
  selectionState.col = undefined;
  selectionState.cell = undefined;
}
