import { gameStateMocks } from './mocks'
import { addRandomCellValueToGameState } from '../cells'

describe('add-random-cell-value-to-game-state', () => {
  test.each(gameStateMocks)(
    'should add value to random cell',
    ({ initial }) => {
      expect(
        addRandomCellValueToGameState(initial).filter(Boolean).length
      ).toBe(initial.filter(Boolean).length + 1)
    }
  )
})
