import { GameState } from '../types'
import { getRandomEmptyIndexFromGameState } from './arrays'

export const generateInitialGameState = (columns: number): GameState => {
  const gameState: GameState = Array(columns * columns).fill(null)

  for (let i = 0; i < 2; i++) {
    gameState[getRandomEmptyIndexFromGameState(gameState)] = 2
  }

  return gameState
}
