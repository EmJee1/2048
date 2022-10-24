import { gameStateMocks } from './mocks'
import { addRandomCellValueToGameState, getRandomCellValue } from '../cells'

describe('get-random-cell-value', () => {
  test('should return a 2 or 4', () => {
    expect([1, 2]).toContain(getRandomCellValue())
  })
})

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
