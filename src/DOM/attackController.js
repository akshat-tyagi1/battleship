import { gameInitializer } from '../index.js';
import renderBoard from './render/renderBoard.js';

const initAttackListeners = (function () {
  const attackedState = {
    row: undefined,
    col: undefined,
    attackedCell: undefined,
  };

  document
    .querySelector('.opponent-grid')
    .addEventListener('click', (event) => {
      const dialog = document.querySelector('.game-result-dialog');
      const gameResult = document.querySelector('.game-result');

      if (!event.target.classList.contains('cell')) {
        return;
      }

      attackedState.attackedCell = event.target;

      attackedState.row = Number(attackedState.attackedCell.dataset.row);
      attackedState.col = Number(attackedState.attackedCell.dataset.col);

      const computerPlayer = gameInitializer.getComputer();
      const comoputerGameboard = computerPlayer.getGameboard();

      const playerGameboard = gameInitializer.getPlayer().getGameboard();

      if (comoputerGameboard.isAttacked(attackedState.row, attackedState.col)) {
        return;
      }

      comoputerGameboard.receiveAttack(attackedState.row, attackedState.col);

      renderBoard(
        gameInitializer.getComputer().getGameboard(),
        document.querySelector('.opponent-grid'),
        false,
      );

      if (comoputerGameboard.allShipsSunk()) {
        gameResult.textContent = 'You Won';
        dialog.showModal();
        return;
      }

      computerPlayer.attack(playerGameboard);

      renderBoard(
        gameInitializer.getPlayer().getGameboard(),
        document.querySelector('.player-grid'),
        true,
      );

      if (playerGameboard.allShipsSunk()) {
        gameResult.textContent = 'You Lost';
        dialog.showModal();
        return;
      }
    });

  document.querySelector('.replay').addEventListener('click', () => {
    location.reload();
  });
})();
