import Player from '../src/player.js';
import { ComputerPlayer } from '../src/player.js';
import Gameboard from '../src/gameboard.js';

test('real Player does not have an attack method', () => {
  const player = new Player();

  expect(player.attack).toBeUndefined();
});

test('ComputerPlayer is also an instance of Player', () => {
  const computer = new ComputerPlayer();

  expect(computer instanceof Player).toBe(true);
});

test('computer retries when the random coordinate was already attacked', () => {
  const computer = new ComputerPlayer();
  const player = new Player();
  const board = player.getGameboard();

  board.receiveAttack(0, 0); // pre-attack (0,0) so it's already taken

  jest.spyOn(Math, 'random')
    .mockReturnValueOnce(0)   // row -> 0 (attempt 1, taken)
    .mockReturnValueOnce(0)   // col -> 0 (attempt 1, taken)
    .mockReturnValueOnce(0.5) // row -> 5 (attempt 2, free)
    .mockReturnValueOnce(0.5); // col -> 5 (attempt 2, free)

  computer.attack(board);

  expect(board.isAttacked(5, 5)).toBe(true);

  Math.random.mockRestore();
});