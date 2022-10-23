import { generateInitialGameState } from '../initial'

describe('generate-initial-game-state', () => {
  test.each([3, 4, 8])(
    'should generate valid initial-game-state for 4 columns',
    (columns) => {
      const gameState = generateInitialGameState(columns)
      expect(gameState.length).toBe(columns * columns)
      expect(gameState.filter((cell) => cell !== null).length).toBe(2)
    }
  )
})
